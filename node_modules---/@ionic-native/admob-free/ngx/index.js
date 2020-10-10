var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { fromEvent } from 'rxjs';
var AdMobFree = /** @class */ (function (_super) {
    __extends(AdMobFree, _super);
    function AdMobFree() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience object to get event names
         * @type {Object}
         */
        _this.events = {
            BANNER_LOAD: 'admob.banner.events.LOAD',
            BANNER_LOAD_FAIL: 'admob.banner.events.LOAD_FAIL',
            BANNER_OPEN: 'admob.banner.events.OPEN',
            BANNER_CLOSE: 'admob.banner.events.CLOSE',
            BANNER_EXIT_APP: 'admob.banner.events.EXIT_APP',
            INTERSTITIAL_LOAD: 'admob.interstitial.events.LOAD',
            INTERSTITIAL_LOAD_FAIL: 'admob.interstitial.events.LOAD_FAIL',
            INTERSTITIAL_OPEN: 'admob.interstitial.events.OPEN',
            INTERSTITIAL_CLOSE: 'admob.interstitial.events.CLOSE',
            INTERSTITIAL_EXIT_APP: 'admob.interstitial.events.EXIT_APP',
            REWARD_VIDEO_LOAD: 'admob.rewardvideo.events.LOAD',
            REWARD_VIDEO_LOAD_FAIL: 'admob.rewardvideo.events.LOAD_FAIL',
            REWARD_VIDEO_OPEN: 'admob.rewardvideo.events.OPEN',
            REWARD_VIDEO_CLOSE: 'admob.rewardvideo.events.CLOSE',
            REWARD_VIDEO_EXIT_APP: 'admob.rewardvideo.events.EXIT_APP',
            REWARD_VIDEO_START: 'admob.rewardvideo.events.START',
            REWARD_VIDEO_REWARD: 'admob.rewardvideo.events.REWARD'
        };
        /**
         * Returns the AdMobFreeBanner object
         * @type {AdMobFreeBanner}
         */
        _this.banner = new AdMobFreeBanner();
        /**
         * Returns the AdMobFreeInterstitial object
         * @type {AdMobFreeInterstitial}
         */
        _this.interstitial = new AdMobFreeInterstitial();
        /**
         * Returns the AdMobFreeRewardVideo object
         * @type {AdMobFreeRewardVideo}
         */
        _this.rewardVideo = new AdMobFreeRewardVideo();
        return _this;
    }
    /**
     * Watch an event
     * @param event {string} event name
     * @return {Observable<any>}
     */
    AdMobFree.prototype.on = function (event) {
        return fromEvent(document, event);
    };
    AdMobFree.pluginName = "AdMobFree";
    AdMobFree.plugin = "cordova-plugin-admob-free";
    AdMobFree.pluginRef = "admob";
    AdMobFree.repo = "https://github.com/ratson/cordova-plugin-admob-free";
    AdMobFree.platforms = ["Android", "iOS"];
    AdMobFree = __decorate([
        Injectable()
    ], AdMobFree);
    return AdMobFree;
}(IonicNativePlugin));
export { AdMobFree };
var AdMobFreeBanner = /** @class */ (function (_super) {
    __extends(AdMobFreeBanner, _super);
    function AdMobFreeBanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdMobFreeBanner.prototype.config = function (options) { return cordova(this, "config", { "sync": true }, arguments); };
    AdMobFreeBanner.prototype.hide = function () { return cordova(this, "hide", { "otherPromise": true }, arguments); };
    AdMobFreeBanner.prototype.prepare = function () { return cordova(this, "prepare", { "otherPromise": true }, arguments); };
    AdMobFreeBanner.prototype.remove = function () { return cordova(this, "remove", { "otherPromise": true }, arguments); };
    AdMobFreeBanner.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    AdMobFreeBanner.pluginName = "AdMobFree";
    AdMobFreeBanner.plugin = "cordova-plugin-admob-free";
    AdMobFreeBanner.pluginRef = "admob.banner";
    AdMobFreeBanner = __decorate([], AdMobFreeBanner);
    return AdMobFreeBanner;
}(IonicNativePlugin));
export { AdMobFreeBanner };
var AdMobFreeInterstitial = /** @class */ (function (_super) {
    __extends(AdMobFreeInterstitial, _super);
    function AdMobFreeInterstitial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdMobFreeInterstitial.prototype.config = function (options) { return cordova(this, "config", { "sync": true }, arguments); };
    AdMobFreeInterstitial.prototype.isReady = function () { return cordova(this, "isReady", { "otherPromise": true }, arguments); };
    AdMobFreeInterstitial.prototype.prepare = function () { return cordova(this, "prepare", { "otherPromise": true }, arguments); };
    AdMobFreeInterstitial.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    AdMobFreeInterstitial.pluginName = "AdMobFree";
    AdMobFreeInterstitial.plugin = "cordova-plugin-admob-free";
    AdMobFreeInterstitial.pluginRef = "admob.interstitial";
    AdMobFreeInterstitial = __decorate([], AdMobFreeInterstitial);
    return AdMobFreeInterstitial;
}(IonicNativePlugin));
export { AdMobFreeInterstitial };
var AdMobFreeRewardVideo = /** @class */ (function (_super) {
    __extends(AdMobFreeRewardVideo, _super);
    function AdMobFreeRewardVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdMobFreeRewardVideo.prototype.config = function (options) { return cordova(this, "config", { "sync": true }, arguments); };
    AdMobFreeRewardVideo.prototype.isReady = function () { return cordova(this, "isReady", { "otherPromise": true }, arguments); };
    AdMobFreeRewardVideo.prototype.prepare = function () { return cordova(this, "prepare", { "otherPromise": true }, arguments); };
    AdMobFreeRewardVideo.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    AdMobFreeRewardVideo.pluginName = "AdMobFree";
    AdMobFreeRewardVideo.plugin = "cordova-plugin-admob-free";
    AdMobFreeRewardVideo.pluginRef = "admob.rewardvideo";
    AdMobFreeRewardVideo = __decorate([], AdMobFreeRewardVideo);
    return AdMobFreeRewardVideo;
}(IonicNativePlugin));
export { AdMobFreeRewardVideo };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FkbW9iLWZyZWUvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFjLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFtSGQsNkJBQWlCOzs7UUFDOUM7OztXQUdHO1FBQ0gsWUFBTSxHQUFHO1lBQ1AsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxnQkFBZ0IsRUFBRSwrQkFBK0I7WUFDakQsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxZQUFZLEVBQUUsMkJBQTJCO1lBQ3pDLGVBQWUsRUFBRSw4QkFBOEI7WUFFL0MsaUJBQWlCLEVBQUUsZ0NBQWdDO1lBQ25ELHNCQUFzQixFQUFFLHFDQUFxQztZQUM3RCxpQkFBaUIsRUFBRSxnQ0FBZ0M7WUFDbkQsa0JBQWtCLEVBQUUsaUNBQWlDO1lBQ3JELHFCQUFxQixFQUFFLG9DQUFvQztZQUUzRCxpQkFBaUIsRUFBRSwrQkFBK0I7WUFDbEQsc0JBQXNCLEVBQUUsb0NBQW9DO1lBQzVELGlCQUFpQixFQUFFLCtCQUErQjtZQUNsRCxrQkFBa0IsRUFBRSxnQ0FBZ0M7WUFDcEQscUJBQXFCLEVBQUUsbUNBQW1DO1lBQzFELGtCQUFrQixFQUFFLGdDQUFnQztZQUNwRCxtQkFBbUIsRUFBRSxpQ0FBaUM7U0FDdkQsQ0FBQztRQVdGOzs7V0FHRztRQUNILFlBQU0sR0FBb0IsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUVoRDs7O1dBR0c7UUFDSCxrQkFBWSxHQUEwQixJQUFJLHFCQUFxQixFQUFFLENBQUM7UUFFbEU7OztXQUdHO1FBQ0gsaUJBQVcsR0FBeUIsSUFBSSxvQkFBb0IsRUFBRSxDQUFDOzs7SUF6Qi9EOzs7O09BSUc7SUFDSCxzQkFBRSxHQUFGLFVBQUcsS0FBYTtRQUNkLE9BQU8sU0FBUyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFsQ1UsU0FBUztRQURyQixVQUFVLEVBQUU7T0FDQSxTQUFTO29CQXJIdEI7RUFxSCtCLGlCQUFpQjtTQUFuQyxTQUFTOztJQStEZSxtQ0FBaUI7Ozs7SUFPcEQsZ0NBQU0sYUFBQyxPQUE4QjtJQVNyQyw4QkFBSTtJQVNKLGlDQUFPO0lBU1AsZ0NBQU07SUFTTiw4QkFBSTs7OztJQTNDTyxlQUFlLGtCQUFmLGVBQWU7MEJBcEw1QjtFQW9McUMsaUJBQWlCO1NBQXpDLGVBQWU7O0lBd0RlLHlDQUFpQjs7OztJQU8xRCxzQ0FBTSxhQUFDLE9BQW9DO0lBUzNDLHVDQUFPO0lBU1AsdUNBQU87SUFTUCxvQ0FBSTs7OztJQWxDTyxxQkFBcUIsa0JBQXJCLHFCQUFxQjtnQ0E1T2xDO0VBNE8yQyxpQkFBaUI7U0FBL0MscUJBQXFCOztJQStDUSx3Q0FBaUI7Ozs7SUFPekQscUNBQU0sYUFBQyxPQUFtQztJQVMxQyxzQ0FBTztJQVNQLHNDQUFPO0lBU1AsbUNBQUk7Ozs7SUFsQ08sb0JBQW9CLGtCQUFwQixvQkFBb0I7K0JBM1JqQztFQTJSMEMsaUJBQWlCO1NBQTlDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRNb2JGcmVlQmFubmVyQ29uZmlnIHtcbiAgLyoqXG4gICAqIEFkIFVuaXQgSURcbiAgICovXG4gIGlkPzogc3RyaW5nO1xuICAvKipcbiAgICogUmVjZWl2aW5nIHRlc3QgYWRcbiAgICovXG4gIGlzVGVzdGluZz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBdXRvIHNob3cgYWQgd2hlbiBsb2FkZWRcbiAgICovXG4gIGF1dG9TaG93PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFNldCB0byB0cnVlLCB0byBwdXQgYmFubmVyIGF0IHRvcFxuICAgKi9cbiAgYmFubmVyQXRUb3A/OiBib29sZWFuO1xuICAvKipcbiAgICogU2V0IHRvIHRydWUsIHRvIGFsbG93IGJhbm5lciBvdmVybGFwIFdlYlZpZXdcbiAgICovXG4gIG92ZXJsYXA/OiBib29sZWFuO1xuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gYXZvaWQgaW9zNyBzdGF0dXMgYmFyIG92ZXJsYXBcbiAgICovXG4gIG9mZnNldFRvcEJhcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBCYW5uZXIgIHNpemVcbiAgICovXG4gIHNpemU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRNb2JGcmVlSW50ZXJzdGl0aWFsQ29uZmlnIHtcbiAgLyoqXG4gICAqIEFkIFVuaXQgSURcbiAgICovXG4gIGlkPzogc3RyaW5nO1xuICAvKipcbiAgICogUmVjZWl2aW5nIHRlc3QgYWRcbiAgICovXG4gIGlzVGVzdGluZz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBdXRvIHNob3cgYWQgd2hlbiBsb2FkZWRcbiAgICovXG4gIGF1dG9TaG93PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZE1vYkZyZWVSZXdhcmRWaWRlb0NvbmZpZyB7XG4gIC8qKlxuICAgKiBBZCBVbml0IElEXG4gICAqL1xuICBpZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFJlY2VpdmluZyB0ZXN0IGFkXG4gICAqL1xuICBpc1Rlc3Rpbmc/OiBib29sZWFuO1xuICAvKipcbiAgICogQXV0byBzaG93IGFkIHdoZW4gbG9hZGVkXG4gICAqL1xuICBhdXRvU2hvdz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgQWRNb2IgRnJlZVxuICogQGRlc2NyaXB0aW9uXG4gKiBBIGZyZWUsIG5vIGFkLXNoYXJpbmcgdmVyc2lvbiBvZiBHb29nbGUgQWRNb2IgcGx1Z2luIGZvciBDb3Jkb3ZhLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tYWRtb2ItZnJlZWAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtBZE1vYiBGcmVlIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vcmF0c29uL2NvcmRvdmEtcGx1Z2luLWFkbW9iLWZyZWUpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQWRNb2JGcmVlLCBBZE1vYkZyZWVCYW5uZXJDb25maWcgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FkbW9iLWZyZWUvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhZG1vYkZyZWU6IEFkTW9iRnJlZSkgeyB9XG4gKlxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiBjb25zdCBiYW5uZXJDb25maWc6IEFkTW9iRnJlZUJhbm5lckNvbmZpZyA9IHtcbiAqICAvLyBhZGQgeW91ciBjb25maWcgaGVyZVxuICogIC8vIGZvciB0aGUgc2FrZSBvZiB0aGlzIGV4YW1wbGUgd2Ugd2lsbCBqdXN0IHVzZSB0aGUgdGVzdCBjb25maWdcbiAqICBpc1Rlc3Rpbmc6IHRydWUsXG4gKiAgYXV0b1Nob3c6IHRydWVcbiAqIH07XG4gKiB0aGlzLmFkbW9iRnJlZS5iYW5uZXIuY29uZmlnKGJhbm5lckNvbmZpZyk7XG4gKlxuICogdGhpcy5hZG1vYkZyZWUuYmFubmVyLnByZXBhcmUoKVxuICogICAudGhlbigoKSA9PiB7XG4gKiAgICAgLy8gYmFubmVyIEFkIGlzIHJlYWR5XG4gKiAgICAgLy8gaWYgd2Ugc2V0IGF1dG9TaG93IHRvIGZhbHNlLCB0aGVuIHdlIHdpbGwgbmVlZCB0byBjYWxsIHRoZSBzaG93IG1ldGhvZCBoZXJlXG4gKiAgIH0pXG4gKiAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcbiAqXG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQWRNb2JGcmVlQmFubmVyQ29uZmlnXG4gKiBBZE1vYkZyZWVJbnRlcnN0aXRpYWxDb25maWdcbiAqIEFkTW9iRnJlZVJld2FyZFZpZGVvQ29uZmlnXG4gKiBAY2xhc3Nlc1xuICogQWRNb2JGcmVlQmFubmVyXG4gKiBBZE1vYkZyZWVJbnRlcnN0aXRpYWxcbiAqIEFkTW9iRnJlZVJld2FyZFZpZGVvXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQWRNb2JGcmVlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYWRtb2ItZnJlZScsXG4gIHBsdWdpblJlZjogJ2FkbW9iJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9yYXRzb24vY29yZG92YS1wbHVnaW4tYWRtb2ItZnJlZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkTW9iRnJlZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG9iamVjdCB0byBnZXQgZXZlbnQgbmFtZXNcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIGV2ZW50cyA9IHtcbiAgICBCQU5ORVJfTE9BRDogJ2FkbW9iLmJhbm5lci5ldmVudHMuTE9BRCcsXG4gICAgQkFOTkVSX0xPQURfRkFJTDogJ2FkbW9iLmJhbm5lci5ldmVudHMuTE9BRF9GQUlMJyxcbiAgICBCQU5ORVJfT1BFTjogJ2FkbW9iLmJhbm5lci5ldmVudHMuT1BFTicsXG4gICAgQkFOTkVSX0NMT1NFOiAnYWRtb2IuYmFubmVyLmV2ZW50cy5DTE9TRScsXG4gICAgQkFOTkVSX0VYSVRfQVBQOiAnYWRtb2IuYmFubmVyLmV2ZW50cy5FWElUX0FQUCcsXG5cbiAgICBJTlRFUlNUSVRJQUxfTE9BRDogJ2FkbW9iLmludGVyc3RpdGlhbC5ldmVudHMuTE9BRCcsXG4gICAgSU5URVJTVElUSUFMX0xPQURfRkFJTDogJ2FkbW9iLmludGVyc3RpdGlhbC5ldmVudHMuTE9BRF9GQUlMJyxcbiAgICBJTlRFUlNUSVRJQUxfT1BFTjogJ2FkbW9iLmludGVyc3RpdGlhbC5ldmVudHMuT1BFTicsXG4gICAgSU5URVJTVElUSUFMX0NMT1NFOiAnYWRtb2IuaW50ZXJzdGl0aWFsLmV2ZW50cy5DTE9TRScsXG4gICAgSU5URVJTVElUSUFMX0VYSVRfQVBQOiAnYWRtb2IuaW50ZXJzdGl0aWFsLmV2ZW50cy5FWElUX0FQUCcsXG5cbiAgICBSRVdBUkRfVklERU9fTE9BRDogJ2FkbW9iLnJld2FyZHZpZGVvLmV2ZW50cy5MT0FEJyxcbiAgICBSRVdBUkRfVklERU9fTE9BRF9GQUlMOiAnYWRtb2IucmV3YXJkdmlkZW8uZXZlbnRzLkxPQURfRkFJTCcsXG4gICAgUkVXQVJEX1ZJREVPX09QRU46ICdhZG1vYi5yZXdhcmR2aWRlby5ldmVudHMuT1BFTicsXG4gICAgUkVXQVJEX1ZJREVPX0NMT1NFOiAnYWRtb2IucmV3YXJkdmlkZW8uZXZlbnRzLkNMT1NFJyxcbiAgICBSRVdBUkRfVklERU9fRVhJVF9BUFA6ICdhZG1vYi5yZXdhcmR2aWRlby5ldmVudHMuRVhJVF9BUFAnLFxuICAgIFJFV0FSRF9WSURFT19TVEFSVDogJ2FkbW9iLnJld2FyZHZpZGVvLmV2ZW50cy5TVEFSVCcsXG4gICAgUkVXQVJEX1ZJREVPX1JFV0FSRDogJ2FkbW9iLnJld2FyZHZpZGVvLmV2ZW50cy5SRVdBUkQnXG4gIH07XG5cbiAgLyoqXG4gICAqIFdhdGNoIGFuIGV2ZW50XG4gICAqIEBwYXJhbSBldmVudCB7c3RyaW5nfSBldmVudCBuYW1lXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIG9uKGV2ZW50OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBmcm9tRXZlbnQoZG9jdW1lbnQsIGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBBZE1vYkZyZWVCYW5uZXIgb2JqZWN0XG4gICAqIEB0eXBlIHtBZE1vYkZyZWVCYW5uZXJ9XG4gICAqL1xuICBiYW5uZXI6IEFkTW9iRnJlZUJhbm5lciA9IG5ldyBBZE1vYkZyZWVCYW5uZXIoKTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgQWRNb2JGcmVlSW50ZXJzdGl0aWFsIG9iamVjdFxuICAgKiBAdHlwZSB7QWRNb2JGcmVlSW50ZXJzdGl0aWFsfVxuICAgKi9cbiAgaW50ZXJzdGl0aWFsOiBBZE1vYkZyZWVJbnRlcnN0aXRpYWwgPSBuZXcgQWRNb2JGcmVlSW50ZXJzdGl0aWFsKCk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIEFkTW9iRnJlZVJld2FyZFZpZGVvIG9iamVjdFxuICAgKiBAdHlwZSB7QWRNb2JGcmVlUmV3YXJkVmlkZW99XG4gICAqL1xuICByZXdhcmRWaWRlbzogQWRNb2JGcmVlUmV3YXJkVmlkZW8gPSBuZXcgQWRNb2JGcmVlUmV3YXJkVmlkZW8oKTtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQWRNb2JGcmVlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYWRtb2ItZnJlZScsXG4gIHBsdWdpblJlZjogJ2FkbW9iLmJhbm5lcidcbn0pXG5leHBvcnQgY2xhc3MgQWRNb2JGcmVlQmFubmVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVXBkYXRlIGNvbmZpZ1xuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtBZE1vYkZyZWVCYW5uZXJDb25maWd9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY29uZmlnKG9wdGlvbnM6IEFkTW9iRnJlZUJhbm5lckNvbmZpZyk6IEFkTW9iRnJlZUJhbm5lckNvbmZpZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIGJhbm5lclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBoaWRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBiYW5uZXJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgcHJlcGFyZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGJhbm5lclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICByZW1vdmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyB0aGUgYmFubmVyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIHNob3coKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQWRNb2JGcmVlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYWRtb2ItZnJlZScsXG4gIHBsdWdpblJlZjogJ2FkbW9iLmludGVyc3RpdGlhbCdcbn0pXG5leHBvcnQgY2xhc3MgQWRNb2JGcmVlSW50ZXJzdGl0aWFsIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVXBkYXRlIGNvbmZpZ1xuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtBZE1vYkZyZWVJbnRlcnN0aXRpYWxDb25maWd9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY29uZmlnKG9wdGlvbnM6IEFkTW9iRnJlZUludGVyc3RpdGlhbENvbmZpZyk6IEFkTW9iRnJlZUludGVyc3RpdGlhbENvbmZpZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGludGVyc3RpdGlhbCBpcyByZWFkeVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBpc1JlYWR5KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgaW50ZXJzdGl0aWFsXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIHByZXBhcmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyB0aGUgaW50ZXJzdGl0aWFsXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIHNob3coKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQWRNb2JGcmVlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYWRtb2ItZnJlZScsXG4gIHBsdWdpblJlZjogJ2FkbW9iLnJld2FyZHZpZGVvJ1xufSlcbmV4cG9ydCBjbGFzcyBBZE1vYkZyZWVSZXdhcmRWaWRlbyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFVwZGF0ZSBjb25maWdcbiAgICogQHBhcmFtIHtBZE1vYkZyZWVSZXdhcmRWaWRlb0NvbmZpZ30gb3B0aW9ucyBBZG1vYiByZXdhcmQgY29uZmlnXG4gICAqIEByZXR1cm4ge0FkTW9iRnJlZVJld2FyZFZpZGVvQ29uZmlnfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGNvbmZpZyhvcHRpb25zOiBBZE1vYkZyZWVSZXdhcmRWaWRlb0NvbmZpZyk6IEFkTW9iRnJlZVJld2FyZFZpZGVvQ29uZmlnIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgcmV3YXJkIHZpZGVvIGlzIHJlYWR5XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGlzUmVhZHkoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSByZXdhcmQgdmlkZW9cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgcHJlcGFyZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSByZXdhcmQgdmlkZW9cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgc2hvdygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19