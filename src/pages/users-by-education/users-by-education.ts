import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { UserDetailPage } from '../user-detail/user-detail';

/**
 * Generated class for the UsersByEducationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-users-by-education',
  templateUrl: 'users-by-education.html',
})
export class UsersByEducationPage implements OnInit{
 
  users:any [];
  duplicates:any [];

  constructor(public navCtrl: NavController, public userProvider:UserProvider) {

  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    let sortedDup = this.userProvider.isolateDuplicate(this.userProvider.getAllUsers())
    this.users = sortedDup.unique;
    this.duplicates = sortedDup.dublicate;

  }

  gotoDetail(user){
    this.navCtrl.push(UserDetailPage,user)
  }

}
