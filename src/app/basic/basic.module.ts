import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { PgpComponent } from './pgp/pgp.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  imports: [
    CommonModule
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
