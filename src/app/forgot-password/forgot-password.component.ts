import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  gotoLoginPage(){
    this.router.navigate(['login']);
  }

  onResetPassword(any){

    console.log("reset password called");
//     Auth.signIn(username, password)
// .then(user => {
//     if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
//         const { requiredAttributes } = user.challengeParam; 
        Auth.completeNewPassword(
            'aaaa@affine.ai',               
            'Abaaaa12$',      
            {
              email: 'aaaa@affine.ai',
              // phone_number: '1234567890'
            }
        ).then(user => {
          
            console.log(user);
        }).catch(e => {
          console.log(e);
        });
//     } else {
      
//     }
// }).catch(e => {
//     console.log(e);
// });



  }

}
