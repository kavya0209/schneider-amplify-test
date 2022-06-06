import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
   console.log("header called");
    
  }

  logOut()
  {
    console.log("logout called");
    Auth.signOut()
      .then(data => {
      
      console.log("--------");
      // console.log(data)
      
      this.router.navigate(['login']);
      // Emit the successful response from Cognito
      // This will be picked up by the view in order to show the
      // confirm form.
      // this.cognitoUser.emit(data);
      })
      .catch((error: any) => {

      console.log("error");
      console.log(error);
      
      // switch (error.code) {
      // case 'UsernameExistsException':
      // this._router.navigate(['login']);
      // break;
      // }
      })
  }

}
