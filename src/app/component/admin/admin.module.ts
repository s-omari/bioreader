import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component'
import { RightComponent } from './right/right.component';
import { LeftComponent } from './left/left.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AdminFormDirective } from './directive/admin-form/admin-form.directive';
import { CenterComponent } from './center/center.component';


//Services
import { AdminService } from './admin.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ 

AdminFormDirective] ,
providers: [AdminService],
})
export class AdminModule { }
export const AdminComponents = [ 
    AdminComponent,
    RightComponent,
    LeftComponent,
    CenterComponent,
    
    BreadcrumbsComponent
]
