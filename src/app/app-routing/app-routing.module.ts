import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '../basic/home/home.component'
import { DevelopmentComponent } from '../development/development/development.component'
import { AboutmeComponent } from '../about/aboutme/aboutme.component'
import { ImprintComponent } from '../basic/imprint/imprint.component'


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Development', component: DevelopmentComponent },
  { path: 'AboutMe', component: AboutmeComponent },
  { path: 'Imprint', component: ImprintComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
