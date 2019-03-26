import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController , IonicPage} from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';

@IonicPage()
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
  }


  ionViewDidEnter() {
    setTimeout(() => {
      this._keyboard.show();// for android
      this.myInput.setFocus();
      },500);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
