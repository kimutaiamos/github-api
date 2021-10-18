import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Github } from '../github-class/github';
//import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
//mport { Observable } from 'rxjs';
//import { ReposServiceService } from '../repos-service.service';

@Injectable({
  providedIn: 'root'
})
 export class GithubRequestService {
  GithubRequestService = GithubRequestService
  user:any;
  repos:any;

  constructor( private http:HttpClient) { }
  showUser(user:any){
   return this.http. get("https://api.github.com/users/" + user+ "?access_token=" +environment.gitApi)
    .pipe(((response:any)=>response));
  }
     
}
