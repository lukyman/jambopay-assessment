import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgeProvider } from '../../providers/age/age';
import { UserProvider } from '../../providers/user/user';
import { UserDetailPage } from '../user-detail/user-detail';

@Component({
  selector: 'page-UsersByAge',
  templateUrl: 'UsersByAge.html'
})

export class UsersByAgePage implements OnInit {
  users:any [];
  duplicates:any[];
  totalAges:number;

  ngOnInit(): void {
    this.getUserSortedByAge();
  }

  constructor(public navCtrl: NavController, public ageProvider:AgeProvider, public userProvider:UserProvider) {
  
  }

  getUserSortedByAge(){
    let sortedDup = this.userProvider.isolateDuplicate(this.userProvider.getAllUsers())
    this.users = this.ageProvider.sortByAge(sortedDup.unique);
    this.duplicates = this.ageProvider.sortByAge(sortedDup.dublicate);
    this.totalAges = this.userProvider.sumUsersAge(sortedDup.unique)
  }
  gotoDetail(user){
    this.navCtrl.push(UserDetailPage,user)
  }
  



}
