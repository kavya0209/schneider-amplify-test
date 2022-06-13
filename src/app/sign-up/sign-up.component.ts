import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { NgForm } from '@angular/forms';
import { ViewChild} from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  @ViewChild('f', {static: false}) f: NgForm;
  password = '';
  email = '';
  firstName = '';
  lastName = '';
  departmentName = '';
  clientName = '';
  
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSignedIn(model){

    Auth.signUp({
      "username": model.email,
      "password": model.password ,
      "attributes": {
      "email": model.email,
      "custom:FirstName" : model.firstName  ,
      "custom:LastName" : model.lastName ,
      "custom:DepartmentName" : model.departmentName,
      "custom:ClientName" : model.clientName 
      }
    })
    .then(data => {
      console.log(data)
      alert("Sign Up was successfull");
      this.router.navigate(['login']);    
  
    })
    .catch((error: any) => {
      
      console.log(error);
   
    })
    // this.router.navigate(['login']);   
  }

  gotoLoginPage(){
    this.router.navigate(['login']);
  }

}
