import { Component, OnInit } from '@angular/core';
import { Storage } from "@aws-amplify/storage";
import { Auth } from 'aws-amplify';
// import { AmplifyS3Image } from "@aws-amplify/angular";

@Component({
  selector: 'app-add-dataset',
  templateUrl: './add-dataset.component.html',
  styleUrls: ['./add-dataset.component.css']
})
export class AddDatasetComponent implements OnInit {

  Invoice_Document = '';
  constructor() { }

  ngOnInit(): void {
    // const currentUser = Auth.currentAuthenticatedUser();
    // console.log(currentUser);
    // var cognitoUser = userPool.getCurrentUser();

    // if (cognitoUser != null) {
    //   cognitoUser.getSession(function(err, result) {
    //     if (result) {
    //       console.log('You are now logged in.');
    
    //       // Add the User's Id Token to the Cognito credentials login map.
    //       AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    //         IdentityPoolId: 'YOUR_IDENTITY_POOL_ID',
    //         Logins: {
    //           'cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>': result.getIdToken().getJwtToken()
    //         }
    //       });
    //     }
    //   });
    // }



    


  }

  importData(){
    console.log(this.Invoice_Document)
  }

  fileChangeEvent(fileInput: any) {

    console.log(fileInput.target.files[0]);
    // this.fileValidResultInvoice = this.globals.validateFile(fileInput.target.files[0].name);
    // this.filesToUpload1 = <Array<File>> fileInput.target.files;

    
    
    Storage.put(fileInput.target.files[0].name, fileInput.target.files[0].name, {
      contentType: fileInput.target.files[0].type,
      customPrefix: {public:''}
  }).then(data => {
      
     console.log(data)
    
  
  })
  .catch((error: any) => {
    
    console.log(error);
   
    
    
    // switch (error.code) {
    // case 'UsernameExistsException':
    //   console.log("-----");
    //   alert(error.code);
    //   this.router.navigate(['login']);
    // break;
    // }
    
  })








  }

}
