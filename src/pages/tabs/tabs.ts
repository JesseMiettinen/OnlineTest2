//Jesse Miettinen 1601555

import { Component } from '@angular/core';
import { IonicPage,  NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
 
  tab1Root: any = 'AboutPage';
  tab2Root: any = 'TargetedCvPage'; //technical skills
  tab3Root: any = 'SoftskillsPage';
  tab4Root: any = 'ProjectWorkPage'; //personal 
  tab5Root: any = 'TeamprojectPage';
  tab6Root: any = 'ExtraCurriculumPage';
  tab7Root: any = 'ContactPage';
  myIndex: number;
 
  constructor(navParams: NavParams) {
    
    this.myIndex = navParams.data.tabIndex || 0;
  }




}