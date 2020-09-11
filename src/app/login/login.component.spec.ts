import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { DebugElement} from "@angular/core";
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
  
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
