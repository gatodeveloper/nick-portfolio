import {Injectable} from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {environment} from "environments/environment";

@Injectable()
export class InterceptorHttp extends Http {

    constructor(
      backend: ConnectionBackend, 
      defaultOptions: RequestOptions
    ){
      super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
      return super.request(url, options);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
      let externalUrl = this.externalUrl(url);
      url = (externalUrl) ? url : this.updateUrl(url);
      return super.get(url, this.getRequestOptionArgs(options, url, externalUrl));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
      let externalUrl = this.externalUrl(url);
      url = (externalUrl) ? url : this.updateUrl(url);
      return super.post(url, body, this.getRequestOptionArgs(options, url, externalUrl));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
      let externalUrl = this.externalUrl(url);
      url = (externalUrl) ? url : this.updateUrl(url);
      return super.put(url, body, this.getRequestOptionArgs(options, url, externalUrl));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
      let externalUrl = this.externalUrl(url);
      url = (externalUrl) ? url : this.updateUrl(url);
      return super.delete(url, this.getRequestOptionArgs(options, url, externalUrl));
    }

    private updateUrl(req: string) {
      return  environment.apiUrl + "/" + req;
    }

    private externalUrl(url: string){
      return !!(/http/.test(url));
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs, url?:string, externalUrl?:boolean) : RequestOptionsArgs {

      let currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
      let tokenData = currentUser.tokenData || {};
      let token = tokenData.access_token;

      if (options == null) {
        options = new RequestOptions();
      }
      if (options.headers == null) {
        options.headers = new Headers();
        if(externalUrl){
          // options.headers.append('Access-Control-Allow-Origin','*');
          // options.headers.append('Access-Control-Allow-Credentials', 'true');
          // options.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        }else{
          options.headers.append('Content-Type', 'application/json');
        }
      }


      if(token && !externalUrl){
        options.headers.append("Authorization", "Bearer " + token)
      }

      return options;
    }
}
