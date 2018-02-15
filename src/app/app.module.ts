import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
