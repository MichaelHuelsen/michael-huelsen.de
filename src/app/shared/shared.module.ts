import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouterComponent } from './app-router/app-router.component';
import { RouterComponent } from './router/router.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppRouterComponent, RouterComponent]
})
export class SharedModule { }
