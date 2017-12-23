import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseComponent } from './browse.component';

import {ProteinComponent as ProteinListingComponent} from './protein/protein.component';
import { ProteinListComponent } from './protein-list/protein-list.component';
import { OrganismComponent as OrganismListingComponent } from './organism/organism.component';
import { OrganismListComponent } from './organism-list/organism-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BrowseComponent, 
    ProteinListComponent, 
    ProteinListingComponent,
    OrganismListComponent, 
    OrganismListingComponent
  ]
})
export class BrowseModule { }
export const BrowseComponents = [ 
  ProteinListComponent,
  ProteinListingComponent,
  OrganismListComponent,
  OrganismListingComponent
]
