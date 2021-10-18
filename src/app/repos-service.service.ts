import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubRequestService } from './github-http/github-request.service';

@Injectable({
  providedIn: 'root'
})
export class ReposServiceService {
  ReposServiceService = ReposServiceService

  _URL = 'https://api.github.com/users/';
  token = '?access_token= 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';
  constructor(public  http: HttpClient) {
  }
 getRepo(searchTerm: string): Observable<any> {
  return this.http.get(this._URL + searchTerm + '/repos?' + this.token);
 }

}
