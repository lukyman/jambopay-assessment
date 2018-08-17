import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { UserDetailPage } from '../user-detail/user-detail';

@Component({
  selector: 'page-allusers',
  templateUrl: 'AllUsers.html'
})
export class AllUsersPage implements OnInit {
 

  users:any [];

  constructor(public navCtrl: NavController, public userProvider:UserProvider) {

  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.users = this.userProvider.getAllUsers();
  }

  gotoDetail(user){
    this.navCtrl.push(UserDetailPage,user)
  }


}
