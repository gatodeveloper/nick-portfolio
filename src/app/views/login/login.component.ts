import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user/user.service';
import { Router } from '@angular/router';
import {FacebookLoginProvider, GoogleLoginProvider} from 'angular4-social-login';
import { AuthService } from 'angular4-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public waitingEmailPromise: any;
  public showEmailForm: boolean;
  public currentStep = 1;

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  toggleSteps() {
    this.currentStep = this.currentStep === 1 ? 2 : 1;
  }

  triggerEventLoginAndRegister(event?) {
    this.router.navigate(['/'])
  }

  login(e, provider) {
    e.preventDefault();
    const providerService =
      provider === 'facebook' ? FacebookLoginProvider : GoogleLoginProvider;
    this.authService.signIn(providerService.PROVIDER_ID).then(result => {
      const ensureEmailPromise = !result.email
        ? new Promise((resolve, reject) => {
            this.showEmailForm = true;
            this.waitingEmailPromise = { resolve, reject };
          })
        : Promise.resolve(result.email);

      ensureEmailPromise
        .then(email => {
          result.email = email.toString();
          return this.userService.socialSign({ authProvider: result });
        })
        .then(() => this.triggerEventLoginAndRegister());
    });
  }

}
