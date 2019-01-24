import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';


@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  @ViewChild('focusInput') myInput;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _keyboard: Keyboard, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    this._keyboard.show();// for android
    this.myInput.setFocus();
  }


  ionViewDidEnter() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
