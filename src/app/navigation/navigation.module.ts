import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavigationComponent } from './navigation.component';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ NavigationComponent ],
  providers: [],
  bootstrap: [ NavigationComponent ]
})
export class NavigationModule { }
