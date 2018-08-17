import { Injectable } from '@angular/core';
import { HttpProvider } from '../http/http';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public httpProvider: HttpProvider) {
    console.log('Hello UserProvider Provider');
  }
 
  getAllUsers(){
   /**
    * When  fetch from http. I left this because the server is throwing CORS not allowed error.
    * 
    * return this.httpProvider.post('user/all',{})
    */
    return  [
          {
              "education": "POST GRAD",
              "email": "beck@glenn.com",
              "fullname": "Beck Glenn",
              "gender": "M",
              "isdriver": true,
              "postaladdress": "8621, 00100",
              "town": "KISUMU",
              "yob": "1988-01-01T00:00:00+03:00"
          },
          {
              "education": "POST GRAD",
              "email": "beck@glenn.com",
              "fullname": "Beck Glenn",
              "gender": "M",
              "isdriver": true,
              "postaladdress": "8621, 00100",
              "town": "KISUMU",
              "yob": "1988-01-01T00:00:00+03:00"
          },
          {
              "education": "GRADUATE",
              "email": "caesar@julius.com",
              "fullname": "Caesar Julius",
              "gender": "F",
              "isdriver": false,
              "postaladdress": "118763, 00100",
              "town": "NAIROBI",
              "yob": "1911-12-03T00:00:00+02:27"
          },
          {
              "education": "GRADUATE",
              "email": "peter@cosby.com",
              "fullname": "Peter Cosby",
              "gender": "M",
              "isdriver": false,
              "postaladdress": "92610, 0176",
              "town": "NAIROBI",
              "yob": "1929-01-04T00:00:00+03:00"
          },
          {
              "education": "GRADUATE",
              "email": "peter@cosby.com",
              "fullname": "Peter Cosby",
              "gender": "M",
              "isdriver": false,
              "postaladdress": "92610, 0176",
              "town": "NAIROBI",
              "yob": "1929-01-04T00:00:00+03:00"
          },
          {
              "education": "GRADUATE",
              "email": "diana@cooper.com",
              "fullname": "Diana Cooper",
              "gender": "F",
              "isdriver": true,
              "postaladdress": "563, 071",
              "town": "NAKURU",
              "yob": "1984-08-09T00:00:00+03:00"
          },
          {
              "education": "GRADUATE",
              "email": "dukes@hazard.com",
              "fullname": "Duke hazard",
              "gender": "M",
              "isdriver": true,
              "postaladdress": "7113, 8013",
              "town": "NAKURU",
              "yob": "1985-10-07T00:00:00+03:00"
          },
          {
              "education": "POST GRAD",
              "email": "noli@fan.com",
              "fullname": "Noli Fan",
              "gender": "M",
              "isdriver": false,
              "postaladdress": "2717, 2503",
              "town": "KISUMU",
              "yob": "1986-04-11T00:00:00+03:00"
          },
          {
              "education": "POST GRAD",
              "email": "fakes@dennis.com",
              "fullname": "Fakes Dennis",
              "gender": "M",
              "isdriver": true,
              "postaladdress": "4310, 3240",
              "town": "KISUMU",
              "yob": "1974-04-09T00:00:00+03:00"
          },
          {
              "education": "GRADUATE",
              "email": "erick@wainanina.com",
              "fullname": "Erick Wainaina",
              "gender": "M",
              "isdriver": true,
              "postaladdress": "4310, 3240",
              "town": "NAIROBI",
              "yob": "2000-03-11T00:00:00+03:00"
          },
          {
              "education": "GRADUATE",
              "email": "victor@musoma.com",
              "fullname": "Victor Musoma",
              "gender": "M",
              "isdriver": true,
              "postaladdress": "4310, 3240",
              "town": "NAKURU",
              "yob": "2001-11-09T00:00:00+03:00"
          },
          {
              "education": "GRADUATE",
              "email": "millie@Adhiambo.com",
              "fullname": "Millie Adhiambo",
              "gender": "F",
              "isdriver": false,
              "postaladdress": "3008, 5240",
              "town": "KISUMU",
              "yob": "1996-03-12T00:00:00+03:00"
          },
          {
              "education": "GRADUATE",
              "email": "amber@rose.com",
              "fullname": "Amber Rose",
              "gender": "F",
              "isdriver": true,
              "postaladdress": "851, 0290",
              "town": "KISUMU",
              "yob": "1990-08-02T00:00:00+03:00"
          },
          {
              "education": "PHD",
              "email": "ted@odero.com",
              "fullname": "Ted Odero",
              "gender": "M",
              "isdriver": true,
              "postaladdress": "2592, 2383",
              "town": "NAIROBI",
              "yob": "1974-11-08T00:00:00+03:00"
          },
          {
              "education": "PHD",
              "email": "matter@oriti.com",
              "fullname": "Matter Oriti",
              "gender": "F",
              "isdriver": true,
              "postaladdress": "5920, 2134",
              "town": "NAIROBI",
              "yob": "1994-08-02T00:00:00+03:00"
          },
          {
              "education": "PHD",
              "email": "stoney@tangawizi.com",
              "fullname": "Stoney Tangawizi",
              "gender": "F",
              "isdriver": true,
              "postaladdress": "019873, 73781",
              "town": "NAIROBI",
              "yob": "1987-05-06T00:00:00+03:00"
          }
      ]
   
    }

    isolateDuplicate(unfiltered){
        let dublicates =[]
        let unique = []
        

        unfiltered.forEach((element1, i) => {
            let no_dup = 0;
           
            for (let index = 0; index < unfiltered.length; index++) {
                if(this.isEqual(unfiltered[index],element1)){
                    no_dup+=1;
                    if(no_dup>1){
                        dublicates.push(unfiltered[index])
                        break;    
                    }
                }

                if(index==unfiltered.length-1 && i<unfiltered.length){
                    unique.push(element1)

                } 
                
            }
            
        });

        return {
            "unique":unique,
            "dublicate":dublicates
        }
    }

    isEqual(obj1:object, obj2:object):boolean{
        let obj1_length = Object.keys(obj1).length;
        let obj2_length = Object.keys(obj2).length;
        
        if(obj1_length!=obj2_length){
            return false;
        }
        let counter = 0;
        for (const key in obj1) {
            
            if (obj2.hasOwnProperty(key) && obj1[key]===obj2[key]) {
                counter+=1;
                if(counter==obj1_length){
                    return true;
                }
            }else{
                return false;
            }
          
        }
    }

    sumUsersAge(uniqueUsers):number{
        let totalAge = 0;

        uniqueUsers.forEach(element => {
            totalAge += parseInt(element.age)
        });
        return totalAge;
    }
}
