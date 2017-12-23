import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RightComponent } from './right/right.component';
import { LeftComponent } from './left/left.component';
import { CenterComponent } from './center/center.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class LayoutModule { }
export const LayoutComponents = [ HeaderComponent, RightComponent, LeftComponent, CenterComponent]