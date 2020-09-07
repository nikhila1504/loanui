import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
  
      if (sessionStorage.getItem('userName') && sessionStorage.getItem('basicauth')) {
        req = req.clone({
          setHeaders: {
            Authorization: sessionStorage.getItem('basicauth')
          }
        })
      }
  
      return next.handle(req);
  
    }
  }
  