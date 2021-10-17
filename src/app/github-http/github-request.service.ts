import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  user:any;
  repos:any;
  
  constructor( private http:HttpClientModule) { }
  showUser(user:any){
    return this.http.get("https://api.github.com/users/" + user+ "?access_token=" + environment.gitApi)
    .pipe(((response:any)=>response));
  }
     
}
