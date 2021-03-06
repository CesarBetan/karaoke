import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SongsPage} from "../songs/songs";
import {ReproductionPage} from "../reproduction/reproduction";

/**
 * Generated class for the KaraokePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-karaoke',
  templateUrl: 'karaoke.html',
})
export class KaraokePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KaraokePage');
  }

  tab1root = ReproductionPage;
  tab2root = SongsPage;

}
