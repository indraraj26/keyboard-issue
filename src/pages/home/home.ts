import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public selectionValue: string;
  public imgArray = [
    {
      url:'https://pmcvariety.files.wordpress.com/2016/02/green-light-international.jpg',
      name:'firstimage'
    },
    {
      url:'https://pmcvariety.files.wordpress.com/2016/02/green-light-international.jpg',
      name:'second'
    },
    {
      url:'https://pmcvariety.files.wordpress.com/2016/02/green-light-international.jpg',
      name:'third'
    },
    {
      url:'https://pmcvariety.files.wordpress.com/2016/02/green-light-international.jpg',
      name:'fourth'
    }
  ]
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  openModal() {
    const modal = this.modalCtrl.create('ModalPage');
    modal.present();
  }

}
