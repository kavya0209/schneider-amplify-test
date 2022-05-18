import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  // { path: '', redirectTo: '/layout', pathMatch: 'full' },
   
    {
      path: 'layout',
      // loadChildren: './layout/layout.module#LayoutModule',
      loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
     
    },
    {
      path : 'sign-up', 
      loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule)
    },
    {
      path : 'login', 
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    { path: 'forgot-password',
      loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
    },
    // { path: '**', redirectTo: 'not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
