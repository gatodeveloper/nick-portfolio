import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {environment} from 'environments/environment';
import {CustomQueryEncoderHelper} from 'app/helpers/query-encoder';
import { LocalStorageService } from 'app/services/localStorage/local-storage.service';

import {User} from './user.model';

@Injectable()
export class UserService {
  public authService = environment.authPath;
  public apiService = `${environment.apiPath}/users`;
  public notificationApiService = `${environment.apiPath}/notifications/`;

  constructor(
    private http: Http,
    private localStorageService: LocalStorageService
  ) {}

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.json());
  }

  public saveCurrentUser(user) {
    this.localStorageService.set('currentUser', user);
  }

  public signUp(user: User): Promise<any> {
    const url = this.apiService;

    return this.http
      .post(url, user)
      .toPromise()
      .then(success => {
        const data = success.json() || {};
        const currentUser = data.data || {};
        this.saveCurrentUser(currentUser);
        return data;
      })
      .catch(this.handleError);
  }

  public _signIn(email: string, password: string): Promise<any> {
    const url = `${this.authService}/oauth/token`;

    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const urlSearchParams = new URLSearchParams(
      '',
      new CustomQueryEncoderHelper()
    );
    urlSearchParams.set('email', email);
    urlSearchParams.set('username', email);
    urlSearchParams.set('password', password);
    urlSearchParams.set('client_id', environment.authClientId);
    urlSearchParams.set('client_secret', environment.authClientSecret);
    urlSearchParams.set('grant_type', 'password');

    return this.http
      .post(url, urlSearchParams, { headers: headers })
      .toPromise()
      .then(success => {
        const data = success.json() || {};
        const currentUser = data.data || {};
        this.localStorageService.set('currentUser', currentUser);
        return data;
      })
      .catch(this.handleError);
  }

  public signIn(user): Promise<any> {
    const url = this.apiService;

    return this.http
      .post(url, user)
      .toPromise()
      .then(success => {
        const data = success.json() || {};
        const currentUser = data.data || data;
        this.localStorageService.set('currentUser', currentUser);
        return data;
      })
      .catch(this.handleError);
  }

  public socialSign(provider): Promise<any> {
    const url = this.apiService;
    const seft = this;

    return this.http
      .post(url, provider)
      .toPromise()
      .then(success => {
        const data = success.json() || {};
        const currentUser = data.data || data;
        this.localStorageService.set('currentUser', currentUser);
        return data;
      })
      .catch(this.handleError);
  }

  public forgotPassword(email: string): Promise<any> {
    const url = `${this.authService}/forgotPassword`;

    return this.http
      .post(url, { email: email })
      .toPromise()
      .then(success => {
        return success;
      })
      .catch(this.handleError);
  }

  public resetPassword(code: string, password): Promise<any> {
    const url = `${this.authService}/resetPassword`;

    return this.http
      .post(url, { code: code, newPassword: password })
      .toPromise()
      .then(success => {
        return success;
      })
      .catch(this.handleError);
  }

  public formatNewUser(user: User) {
    const formatedUser = Object.assign(user);
    delete formatedUser['repeat-password'];
    return formatedUser;
  }

  public getCurrentUser() {
    return this.localStorageService.get('currentUser') || {};
  }

  public getUsers(params): Promise<any> {
    const url = this.apiService;
    return this.http
      .get(url, { params })
      .toPromise()
      .then(success => {
        return success.json().data;
      })
      .catch(this.handleError);
  }

  public getUserById(id: string): Promise<any> {
    const url = `${this.apiService}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(success => {
        return success.json().data;
      })
      .catch(this.handleError);
  }

  public loadUserData(parameters) {
    let params = '?';

    Object.keys(parameters).map(index => {
      const key = parameters[index];
      params += key + '=' + parameters[key]
    })

    const url = (this.apiService += '/' + this.getCurrentUser()._id + params);

    return this.http
      .get(url, parameters)
      .toPromise()
      .then(
        (response: any) => JSON.parse(response._body).data['warehouse-request']
      );
  }

  public updateUser(id: string, data: any) {
    const url = `${this.apiService}/${id}`;
    return this.http
      .put(url, data)
      .toPromise()
      .then(success => {
        const currentUser = success.json();
        currentUser.tokenData = this.getCurrentUser().tokenData;
        this.saveCurrentUser(currentUser);
      })
      .catch(this.handleError);
  }

  public getUserNotificationConf() {
    const url = `${this.notificationApiService}/configuration/`;
    return this.http
      .get(url)
      .toPromise()
      .then(success => success.json())
      .catch(this.handleError);
  }

  public saveNotificationConf(data) {
    const url = `${this.notificationApiService}/configuration/`;
    return this.http
      .post(url, data)
      .toPromise()
      .then(success => success)
      .catch(this.handleError);
  }

  public updateUserEmail(email: string) {
    const url = `${this.apiService}/change-email/`;
    return this.http
      .post(url, { email })
      .toPromise()
      .then(success => success)
      .catch(this.handleError);
  }
}
