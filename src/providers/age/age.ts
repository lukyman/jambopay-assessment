import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AgeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AgeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AgeProvider Provider');
  }

  calculateAge(yob):number{
    let todaysYear = new Date().getFullYear();
    let yearOfBirth = new Date(yob).getFullYear();
    return todaysYear - yearOfBirth;
  }

  ageGroup(age:number):string{
    if(age<=21){
      return "Young";
    }else if(age<=40 && age>21){
      return "Youth";
    }else if (age > 40){
      return "Old";
    }else{
      return null;
    }
  }

  sortByAge(unsortedData){
    let sortedData = []
    unsortedData.forEach(element => {
      element.age = this.calculateAge(element.yob);
      element.agegroup = this.ageGroup(element.age)
      sortedData.push(element)
    });
    return sortedData;
  }

}
