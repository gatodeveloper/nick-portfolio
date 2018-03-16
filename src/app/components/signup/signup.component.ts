import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  public loadings: any = {};
  public signUpResponse: string;

  // tslint:disable-next-line:no-input-rename
  @Input('redirectTo') redirect: string;
  @Input('userRole') userRole: string;
  @Output() callback: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private router: Router,
    private userService: UserService,
    private troast: ToastrService
  ) {}

  ngOnInit() {}

  onSignup(form: NgForm) {
    const value = form.value;
    const invalid = form.invalid;

    this.loadings.onSignup = true;

    this.resetSignup();

    if (invalid) {
      return;
    }

    const user = this.userService.formatNewUser(value);
    user.role = this.userRole;

    this.userService
      .signUp(user)
      .then(result => {
        this.signUpResponse = 'Successfully created user';
        this.callback.emit();
        this.loadings.onSignup = false;
      })
      .catch(err => {
        this.signUpResponse = 'Error creating user';
        this.loadings.onSignup = false;
      });
  }

  private resetSignup(): void {
    this.signUpResponse = null;
  }
}
