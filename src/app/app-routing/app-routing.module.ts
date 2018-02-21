import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '../basic/home/home.component'
import { DevelopmentComponent } from '../development/development/development.component'
import { AboutmeComponent } from '../about/aboutme/aboutme.component'
import { ImprintComponent } from '../basic/imprint/imprint.component'
import { PgpComponent } from '../basic/pgp/pgp.component'
import { NotfoundComponent } from '../basic/notfound/notfound.component'


const routes: Routes = [
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
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
