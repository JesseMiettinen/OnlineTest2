//Jesse Miettinen 1601555

import { Component, ViewChild } from '@angular/core';
import { IonicPage,  NavController, NavParams, Nav, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

 
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
 
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  
  rootPage = 'TabsPage';
 
  
  @ViewChild(Nav) nav: Nav;
 
  //Menu links here
  
  pages: PageInterface[] = [
    { title: 'Personal Information', pageName: 'TabsPage', tabComponent: 'AboutPage', index: 0, icon: 'home' },
    { title: 'Technical Skills', pageName: 'TabsPage', tabComponent: 'TargetedCvPage', index: 1, icon: 'desktop' },
    { title: 'Soft Skills', pageName: 'TabsPage', tabComponent: 'ContactPage', index: 2, icon: 'brush' },
    { title: 'Personal Project', pageName: 'TabsPage', tabComponent: 'ProjectWorkPage', index: 3, icon: 'build' },
    { title: 'Team Project', pageName: 'TabsPage', tabComponent: 'ContactPage', index: 4, icon: 'construct' },
    { title: 'Extra Curriculum Activities', pageName: 'TabsPage', tabComponent: 'ExtraCurriculumPage', index: 5, icon: 'bicycle' },
    { title: 'Contact Information', pageName: 'TabsPage', tabComponent: 'ContactPage', index: 6, icon: 'contacts' }
    
  ];
 
    constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    
    public navCtrl: NavController, public navParams: NavParams) { }
 
//Navigation for tabs
  openPage(page: PageInterface) {
    let params = {};
     
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
   
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
    
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
 
//Welcomes authenticated user or in failed login denies it
  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Welcome to Jesse's CV, ${data.email}`,
          duration: 2000
        }).present();
      }
      else {
       this.navCtrl.setRoot('LoginPage')
      }
        })
      }
      logout() {
        this.navCtrl.setRoot('FailPage')
        
      }
}