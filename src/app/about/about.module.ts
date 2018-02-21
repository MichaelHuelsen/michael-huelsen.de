import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutmeComponent } from './aboutme/aboutme.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AboutmeComponent],
  exports: [AboutmeComponent]
})
export class AboutModule { }
