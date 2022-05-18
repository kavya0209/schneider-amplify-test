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
    console.log("onlogged in called");
    this.router.navigate(['layout']);
    // this.router.navigate(['forgot-password']);
    // this.router.navigate(['/sign-up']);
  }

  gotoResetPwdPage(){
    this.router.navigate(['layout']);
  }

  gotoSignUpPage(){
    this.router.navigate(['sign-up']);
  }

}
