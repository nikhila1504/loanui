import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  validLogin = false


  constructor(private router: Router,
    private loginservice: AuthService) { }

  ngOnInit() {
  }

  handleLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['/home'])
        this.validLogin = true
        this.successMessage = 'Login Successful.';

      },
      error => {
        this.invalidLogin = true

      }
    )
    );

  }

}