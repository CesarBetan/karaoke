import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservationPage} from '../reservation/reservation';
import { KaraokePage } from "../karaoke/karaoke";
import { FoodPage } from "../food/food";
import { UserPage } from "../user/user";

/**
 * Generated class for the HomepagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  reservationPage = ReservationPage;
  karaokePage = KaraokePage;
  foodPage = FoodPage;
  userPage = UserPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
