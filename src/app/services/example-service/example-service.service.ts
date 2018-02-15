import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {environment} from 'environments/environment';
//import {Handle} from 'app/helpers/handle';

@Injectable()
export class ExampleServiceService {

  constructor(
  	private http: Http,
  	//private handle: Handle,
  ) {}

  public apiService = environment.apiPath;

  public getExample(query?) {

    //let url = `${this.apiService}/some-resource`;
    let url = 'http://localhost:4400/assets/get-data-example.json'; // Just a http get example.

    return this.http.get(url)
      .toPromise()
      .then(success => {
      	debugger;
        return success.json();
      })
      .catch( e => {
      	debugger;
      });
      //.catch(this.handle.error);
  }

}
