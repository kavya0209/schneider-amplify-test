import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Auth } from 'aws-amplify';
import {Amplify} from 'aws-amplify';

Amplify.configure({
  Auth : {
    region : 'us-east-2',
    userPoolId : 'us-east-2_kLOF5LiBE',
    userPoolWebClientId : 'nqoa69tmnhjgrk7epqchali6m',
    authenticationFlowType : 'USER_PASSWORD_AUTH'
  }
});

// import Amplify, { Auth } from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure({

// });





if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
