import { Component, OnInit , ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('f', {static: false}) f: NgForm;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLoggedin(model){
    this.router.navigate(['layout']);
  }

  gotoResetPwdPage(){
    this.router.navigate(['forgot-password']);
  }

  gotoSignUpPage(){
    this.router.navigate(['sign-up']);
  }

}
