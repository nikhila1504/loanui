import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
export class HttpClientService {

  private baseUrl="http://localhost:8080/user/basicauth";

  constructor(
    private http: HttpClient

  ) {
  }

}

