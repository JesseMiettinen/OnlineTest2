//Jesse Miettinen 1601555

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
//Sets default graduation date
  graduating = '2019-12-31';

    }