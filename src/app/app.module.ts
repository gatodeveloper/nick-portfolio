import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Config Files

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { httpFactory } from './services/http/http.factory';

// Services
import { ExampleServiceService } from 'app/services/example-service/example-service.service';
import { LocalStorageService } from 'app/services/localStorage/local-storage.service';
// Components and Views

import { ExampleComponentSharedComponent } from './components/example-component-shared/example-component-shared.component';

import { environment } from 'environments/environment';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { HomeComponent } from './views/home/home.component';
import { DesignProcessComponent } from './views/design-process/design-process.component';
import { DesignPhilosophyComponent } from './views/design-philosophy/design-philosophy.component';
import { StoryComponent } from './views/story/story.component';

import { MatIconModule } from '@angular/material/icon';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  declarations: [
    AppComponent,
    ExampleComponentSharedComponent,
    MainHeaderComponent,
    MainFooterComponent,
    HomeComponent,
    DesignProcessComponent,
    DesignPhilosophyComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    ClipboardModule
  ],
  providers: [
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    },
    ExampleServiceService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}