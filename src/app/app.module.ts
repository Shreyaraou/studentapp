import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { AddstudComponent } from './addstud/addstud.component';
import { ViewAllstudsComponent } from './view-allstuds/view-allstuds.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OnestudComponent } from './onestud/onestud.component';
import { ModifyComponent } from './modify/modify.component';

import { Login1Component } from './login1/login1.component';
import { WelcomeComponent } from './welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    AddstudComponent,
    ViewAllstudsComponent,
    OnestudComponent,
    ModifyComponent,

    Login1Component,
     WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
