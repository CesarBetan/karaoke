import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SongsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-songs',
  templateUrl: 'songs.html',
})
export class SongsPage {

  items;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Armagedon',
      'Baba ORiley',
      'Bonita',
      'Crazy little thing called love',
      'Despacito',
      'Enter Sandman',
      'First Date',
      'Gimme Shelter',
      'Glasglow',
      'Hasta la Raiz',
      'I miss you',
      'Jacqueline',
      'Kickstart my Heart',
      'Lamento Boliviano',
      'Man Overboard',
      'New York State of Mind',
      'Out of Control',
      'Pachuco',
      'Que Electricidad',
      'Rats & Racoons',
      'Scar Tissue',
      'Tears in Heaven',
      'Unnatural Selection',
      'Valerie',
      'Welccome to the Jungle',
      'You Shook Me All Night Long',
      'Zombie'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
