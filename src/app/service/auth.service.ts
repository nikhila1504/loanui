import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User {
  constructor(
    public status: string,
    public userName: string,
    public password: string,
    public id:number,
    public active :boolean
  ) { }

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  authenticate(userName, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(userName + ':' + password) });
    return this.httpClient.get<User>('http://localhost:8080/user/basicauth', { headers }).pipe(
      map(
        userData => {
          sessionStorage.setItem('userName', userName);
          let authString = 'Basic ' + btoa(userName + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          return userData;
        }
      )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('userName')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('userName')
  }
}
