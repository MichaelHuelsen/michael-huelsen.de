import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DevelopmentModule } from './development/development.module';
import { BasicModule } from './basic/basic.module';
import { AboutModule } from './about/about.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './basic/home/home.component';
import { DevelopmentComponent } from './development/development/development.component';
import { AboutmeComponent } from './about/aboutme/aboutme.component';
import { ImprintComponent } from './basic/imprint/imprint.component';
import { PgpComponent } from './basic/pgp/pgp.component';
import { NotfoundComponent } from './basic/notfound/notfound.component';



const appRoutes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Development', component: DevelopmentComponent },
  { path: 'AboutMe', component: AboutmeComponent },
  { path: 'Imprint', component: ImprintComponent },
  { path: 'PGP', component: PgpComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    BasicModule,
    DevelopmentModule,
    AboutModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
