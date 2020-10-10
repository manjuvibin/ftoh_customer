import { Pipe, PipeTransform } from '@angular/core';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';


@Pipe({
  name: 'translate',
  pure: false
})
export class TranslateAppPipe implements PipeTransform {


  constructor(public shared: SharedDataService) {

  }
  transform(value: string) {
    //console.log(value + " " + this.shared.translationListArray[value.toString()]);
    if (this.shared.translationListArray[value] == undefined) {
      if (this.shared.lab)
        this.shared.missingValues[value] = value;
      return value;
    }
    return this.shared.translationListArray[value];
  }

}
