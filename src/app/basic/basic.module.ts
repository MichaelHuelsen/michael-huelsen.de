import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, ImprintComponent]
})
export class BasicModule { }
