import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserDetailPage } from '../user-detail/user-detail';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-UsersByDriverStatus',
  templateUrl: 'UsersByDriverStatus.html'
})
export class UsersByDriverStatusPage implements OnInit{

 
  users:any [];
  duplicates:any[];

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
