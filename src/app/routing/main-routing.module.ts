import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, CanLoad } from '@angular/router';

import { HomeViewExampleComponent } from 'app/views/home-view-example/home-view-example.component';
import { LoginComponent } from 'app/views/login/login.component';
import { ForgotPasswordComponent } from 'app/views/forgot-password/forgot-password.component'
import { ResetPasswordComponent } from 'app/views/reset-password/reset-password.component';



const routes: Routes = [
  { path: '', component: HomeViewExampleComponent },
  { path: 'sign-in', component: LoginComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  // {
  //   path: 'nested-view-example',
  //   children: [
  //     { path: '', component: WarehouseNewComponent, canActivate: [LoggedGuard], },
  //     { path: 'view-1', component: WarehouseNewStepsComponent },
  //     { path: 'view-2', component: WarehouseSuccessComponent }
  //   ]
  //},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class MainRoutingModule { }
