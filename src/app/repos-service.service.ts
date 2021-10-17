import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { catchError, map ,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReposServiceService {

  _URL = 'https://api.github.com/users/';
  token = '?access_token= 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';
  constructor(public  http: HttpClientModule) {
  }
 getRepo(searchTerm: string): Observable<any> {
   return this.http.get(this._URL + searchTerm + '/repos?' + this.token);
  }

}