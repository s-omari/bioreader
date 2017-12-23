//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { HttpModule } from '@angular/http';


//routing module
import { AppRoutingModule , routingComponents} from "./app.routing.module";
import { RouterModule, Routes } from '@angular/router';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';


//Components
import { AppComponent } from './app.component';

//shared Modules
import { DynamicFormModule } from './component/shared/dynamic-form/dynamic-form.module';
import { LayoutModule , LayoutComponents } from "./shared/component/layout/layout.module";
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//import {PrettyJsonModule} from 'angular2-prettyjson';
import { MonacoEditorModule } from 'ngx-monaco-editor';

//featureModules
//browse
import { AdminModule } from "./component/admin/admin.module";
import { AdminComponents } from "./component/admin/admin.module";

//browse
import { BrowseModule } from "./component/browse/browse.module";
import { BrowseComponents } from "./component/browse/browse.module";
//blog
import { BlogModule } from "./component/blog/blog.module";
import { BlogComponents } from "./component/blog/blog.module";

import { ProteinListComponent } from './component/browse/protein-list/protein-list.component';
import { OrganismListComponent } from './component/browse/organism-list/organism-list.component';


//Services
import { ApiService } from './service/api.service';


//////////
//old REDUX
//import { metaReducer } from "./component/shared/index";
//import {StoreModule, combineReducers} from "@ngrx/store";


//import { INITIAL_APPLICATION_STATE  , ApplicationState} from "./shared/store/application-state";
//import { storeReducer} from "./reducer";

///



//////////
// NEW REDUX
import { metaReducer } from "./shared/store/index";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";




//layout stuff
import {SidebarWatchDirective} from "./directive/sidebar-watch.directive";
import {SidebarToggleDirective} from "./directive/sidebar-toggle.directive";






@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LayoutComponents,
    AdminComponents,
    BrowseComponents,
    BlogComponents,
    SidebarWatchDirective,
    SidebarToggleDirective
  ],
  imports: [
    BrowserModule ,
    HttpModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    //PrettyJsonModule,
    MonacoEditorModule,
    NgbModule.forRoot(),
    DynamicFormModule,

    //old redux
   // StoreModule.provideStore(storeReducer, INITIAL_APPLICATION_STATE),

    // NEW REDUX
    StoreModule.provideStore(metaReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    AppRoutingModule ,
    BrowserModule,
  //BlogModule,
    AdminModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
