import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { PgpComponent } from './pgp/pgp.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTooltipModule,
    MatIconModule
  ],
  //declarations: [HomeComponent, ImprintComponent, NavigationComponent, FooterComponent]
  declarations: [HomeComponent, ImprintComponent, NavigationComponent,
    FooterComponent, PgpComponent, NotfoundComponent],
  exports: [
    HomeComponent, NavigationComponent, ImprintComponent, FooterComponent,
    PgpComponent, NotfoundComponent
  ]
})
export class BasicModule { }
