import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage {
  user:any ={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailPage');
  }

}
