import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { IonContent } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';
import { AppEventsService } from 'src/providers/app-events/app-events.service';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  scrollTopButton = false;//for scroll down fab 
  constructor(
    public shared: SharedDataService,
    public appEventsService: AppEventsService,
    public config: ConfigService, ) {

  }
  sliderConfig = {
    slidesPerView: this.config.productSlidesPerPage,
    spaceBetween: 0
  }
  // For FAB Scroll
  onScroll(e) {
    if (e.detail.scrollTop >= 500) {
      this.scrollTopButton = true;
    }
    if (e.detail.scrollTop < 500) {
      this.scrollTopButton = false;
    }
  }
  // For Scroll To Top Content
  scrollToTop() {
    this.content.scrollToTop(700);
    this.scrollTopButton = false;
  }
  ngOnInit() {
  }
  ionViewDidEnter() {
    this.shared.hideSplashScreen();
  }

  ionViewWillEnter() {
    if (!this.config.appInProduction) {
      this.config.productCardStyle = "5";
    }
  }
}
