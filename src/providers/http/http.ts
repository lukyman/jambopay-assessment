import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {
  private token: string = '';
  private baseuri:string = '';

  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }

  post(endpoint, payload){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${this.token}`)
    
    let fullurl = `${this.baseuri}${endpoint}`;
    return this.http.post(fullurl, payload, {headers:headers}).map(success=>{
      return success || {}
    }, error=>{
      console.log(error)
    })
  }

}
