import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavigationComponent } from './basic/navigation/navigation.component';
import { HomeComponent } from './basic/home/home.component';
import { DevelopmentComponent } from './development/development/development.component'
import { AboutmeComponent } from './about/aboutme/aboutme.component'
import { ImprintComponent } from './basic/imprint/imprint.component';
import { FooterComponent } from './basic/footer/footer.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, NavigationComponent, HomeComponent, AboutmeComponent,
    DevelopmentComponent, ImprintComponent, FooterComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
