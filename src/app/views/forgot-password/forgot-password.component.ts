import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

//import { ToastrService } from 'ngx-toastr';

import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.sass']
})
export class ForgotPasswordComponent implements OnInit {
  constructor(
    private userService: UserService,
    //private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    const value = form.value;
    this.userService
      .forgotPassword(value.email)
      .then(result => {
        const data = result.data || result._body || result;
        //this.toastr.success(data);
        this.router.navigate(['reset-password'], {
          queryParams: { email: value.email }
        });
      })
      .catch(error => {
        const err = error.error || error;
        //this.toastr.error(err);
      });
  }
}
