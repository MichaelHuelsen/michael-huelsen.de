import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DevelopmentModule } from './development/development.module'
import { BasicModule } from './basic/basic.module'
import { AboutModule } from './about/about.module'
//import { NavigationComponent } from './basic/navigation/navigation.component';
//import { HomeComponent } from './basic/home/home.component';
//import { ImprintComponent } from './basic/imprint/imprint.component';
//import { FooterComponent } from './basic/footer/footer.component';
//import { DevelopmentComponent } from './development/development/development.component'
//import { AboutmeComponent } from './about/aboutme/aboutme.component'

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BasicModule,
    DevelopmentModule,
    AboutModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
