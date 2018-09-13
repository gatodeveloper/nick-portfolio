import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, CanLoad } from '@angular/router';

import { HomeComponent } from 'app/views/home/home.component';
import { DesignProcessComponent } from 'app/views/design-process/design-process.component';
import { DesignPhilosophyComponent } from 'app/views/design-philosophy/design-philosophy.component';
import { StoryComponent } from 'app/views/story/story.component';

import { LoginComponent } from 'app/views/login/login.component';
import { ForgotPasswordComponent } from 'app/views/forgot-password/forgot-password.component'
import { ResetPasswordComponent } from 'app/views/reset-password/reset-password.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'design-process', component: DesignProcessComponent },
  { path: 'design-philosophy', component: DesignPhilosophyComponent },
  { path: 'story', component: StoryComponent },

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
