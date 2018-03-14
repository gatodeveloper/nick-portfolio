import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SocialLoginModule, AuthServiceConfig } from 'angular4-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Config Files

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { httpFactory } from './services/http/http.factory';

// Services
import { ExampleServiceService } from 'app/services/example-service/example-service.service';
import { UserService } from 'app/services/user/user.service'
import { LocalStorageService } from 'app/services/localStorage/local-storage.service';
// Components and Views

import { HomeViewExampleComponent } from 'app/views/home-view-example/home-view-example.component';
import { ExampleComponentSharedComponent } from './components/example-component-shared/example-component-shared.component';
import { LoginComponent } from './views/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';

import { environment } from 'environments/environment';
import { ResetPasswordComponent } from './views/reset-password/reset-password.component';

const socialLoginConfig = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(environment.googleKey)
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(environment.facebookKey)
  }
]);

export function provideConfig() {
  return socialLoginConfig;
}
@NgModule({
  declarations: [
    AppComponent,
    ExampleComponentSharedComponent,
    HomeViewExampleComponent,
    LoginComponent,
    SigninComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SocialLoginModule
  ],
  providers: [
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    ExampleServiceService,
    UserService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
