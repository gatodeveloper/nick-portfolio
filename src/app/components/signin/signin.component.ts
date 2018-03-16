import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  public loadings: any = {};
  // tslint:disable-next-line:no-input-rename
  @Input('redirectTo') redirect: string;
  @Output() callback: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService
  ) {}

  ngOnInit() {}

  onSignIn(form: NgForm) {
    const formValue = form.value || {};
    this.loadings.onSignIn = true;
    this.signIn(formValue.email, formValue.password);
  }

  signIn(email, password) {
    this.userService
      .signIn({ email: email, password: password, isSignin: true })
      .then(result => {
        this.callback.emit();
        this.loadings.onSignIn = false;
      })
      .catch(err => {
        this.toastr.error(err.error_description);
        this.loadings.onSignIn = false;
      });
  }
}
