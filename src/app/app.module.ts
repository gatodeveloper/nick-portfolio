import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Config Files

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { httpFactory } from "./services/http/http.factory";

// Services
import { ExampleServiceService } from "app/services/example-service/example-service.service";

// Components and Views

import { HomeViewExampleComponent } from 'app/views/home-view-example/home-view-example.component';
import { ExampleComponentSharedComponent } from './components/example-component-shared/example-component-shared.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponentSharedComponent,
    HomeViewExampleComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    },
    ExampleServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
