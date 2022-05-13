import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // { path: 'login', loadChildren: 'src/app/login/login.module#LoginModule' },
    {
      path: '',
      loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
      // loadChildren: './layout/layout.module#LayoutModule',
  
      // canActivate: [AuthGuard],
      // resolve: {
      //   cds: CDSDataResolver
      // }
    },
    {
      path : 'login', 
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    { path: 'forgot-password',
      loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
    },
    { path: '**', redirectTo: 'not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
