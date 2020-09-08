import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {Component, DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userName:DebugElement;
  let password:DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
    component=fixture.componentInstance;
    userName=fixture.debugElement.query(By.css('input=id[username]'));
    password=fixture.debugElement.query(By.css('input=id[password]'))

  }));
  // it('entering value into inputs',()=>{
  //   let users:any;
  //   userName.nativeElement.value="nikhila";
  //   password.nativeElement.value="nikhila";
  //   expect(component.form.valid).toBeTruthy();

  // });
  // it('entering value into inputs',()=>{
  //   let users:any;
  //   userName.nativeElement.value="";
  //   password.nativeElement.value="";
  //   expect(component.form.valid).toBeFalsy();

  // });
  


  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 'Loan Management' as title`, async(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('Loan Management');
  }));

});
