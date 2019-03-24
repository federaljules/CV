import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPage = [        /**Here I create objects to left side navigation */
    {
      title: 'About',
      url: '',
      icon: 'information-circle-outline'
    },

    {
      title: 'CV',
      url: '/tab3',
      icon: 'clipboard'
    },

    {
      title: 'Experience',
      url: '/tab4',
      icon: 'briefcase'
    },
    {
      title: 'Contact',
      url: '/tab5',
      icon: 'mail'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
