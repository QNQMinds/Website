import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private api:ApiService) { }

    public signup(body: any): Observable<any> {
    return this.api.post('users/signup', body,false,true).pipe(
      map((res) => res)
    );
  }
}
