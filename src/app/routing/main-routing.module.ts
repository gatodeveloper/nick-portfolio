import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, CanLoad } from '@angular/router';

import { HomeViewExampleComponent } from 'app/views/home-view-example/home-view-example.component';
import { LoginComponent } from 'app/views/login/login.component';

//import { LoggedGuard } from 'app/guards/logged.guard';

const routes: Routes = [
  { path: '', component: HomeViewExampleComponent },
  { path: 'sign-in', component: LoginComponent},
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
