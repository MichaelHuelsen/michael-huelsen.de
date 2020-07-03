import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BasicModule } from './basic/basic.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './basic/home/home.component';
import { ImprintComponent } from './basic/imprint/imprint.component';
import { PgpComponent } from './basic/pgp/pgp.component';
import { DevelopmentComponent } from './basic/development/development.component';
import { AboutComponent } from './basic/about/about.component';
import { NotfoundComponent } from './basic/notfound/notfound.component';



const appRoutes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Development', component: DevelopmentComponent },
  { path: 'About', component: AboutComponent },
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
    BasicModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
