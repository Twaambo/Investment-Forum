import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Icon } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MessagesPage } from '../pages/messages/messages';
import { CategoriesPage } from '../pages/categories/categories';
import { MapsPage } from '../pages/maps/maps';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: "home" },
      { title: 'Massages', component: MessagesPage, icon: "mail" },
      { title: 'Categories', component: CategoriesPage, icon: "pricetag" },
      { title: 'Maps', component: MapsPage, icon: "map" },
      { title: 'Settings', component: SettingsPage, icon: "settings" },
      { title: 'About', component: AboutPage, icon: "information-circle" },
      { title: 'List', component: ListPage, icon: "listbox" }
    //  { title: 'Logout', component: LogoutPage, icon: "logout" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
