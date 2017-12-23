import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//routing components

import { OrganismComponent } from './component/organism/organism.component';
//import { CatComponent } from './component/cat/cat.component';
import { ProteinComponent } from './component/protein/protein.component';
import { ProteinDetailsComponent } from './component/protein/protein-details/protein-details.component';
import { OrganismDetailsComponent } from './component/organism/organism-details/organism-details.component';
import { ProteinReferenceDetailsComponent } from './component/protein/protein-reference-details/protein-reference-details.component';
import { AdminComponent } from './component/admin/admin.component';
//import { ProteinComponent as ProteinAdminComponent } from './component/admin/protein/protein.component';
import { TemplateModalComponent } from './component/template-modal/template-modal.component';
import { DataTableComponent } from './shared/component/data-table/data-table.component';
//import { SidebarComponent } from './component/admin/sidebar/sidebar.component';
import { BrowseComponent } from './component/browse/browse.component';
import { ProteinListComponent } from './component/browse/protein-list/protein-list.component';
import { OrganismListComponent } from './component/browse/organism-list/organism-list.component';

//Blog
import { BlogComponent } from './component/blog/blog.component';
import { PostDetailsComponent } from './component/blog/post-details/post-details.component';


// Routes
const appRoutes: Routes = [
    { path: 'admin' , component: AdminComponent ,
            children: [
                {
                    path: 'proteins',
                    component: AdminComponent
                },
                {
                    path: 'categories',
                    component: AdminComponent
                },
                {
                    path: 'organisms',
                    component: AdminComponent
                },
                {
                    path: 'protein-types',
                    component: AdminComponent
                },
                {
                  path: 'protein-references',
                  component: AdminComponent
              },
              {
                path: 'blog-posts',
                component: AdminComponent
            },
            {
              path: 'blog-categories',
              component: AdminComponent
          },
          {
            path: 'tags',
            component: AdminComponent
        }
            ]
    },
  
    { path: 'browse', component: BrowseComponent ,
    children: [
        {
            path: 'proteins',
            component: ProteinListComponent
        },
        {
            path: 'organisms',
            component: OrganismListComponent
        }
      ]  
    },

    { path: 'blog', 
    children: [
        {
            path: '' ,
            component: BlogComponent 
        },
        {
            path: ':id',
            component: PostDetailsComponent
        },
      ]  
    },  
     { path: 'proteins', 
    children: [
        {
            path: '' ,
            component: ProteinComponent 
        },
        {
            path: ':id',
            component: ProteinDetailsComponent
        },
        {
            path: 'reference/:id',
            component: ProteinReferenceDetailsComponent
        }
      ]  
    }, 
    { path: 'organisms', 
    children: [
        {
            path: '' ,
            component: OrganismComponent 
        },
        {
            path: ':id',
            component: OrganismDetailsComponent 
        }
      ]  
    },

      { path: 'protein',  
    children: [
        {
            path: 'reference/:id',
            component: ProteinReferenceDetailsComponent
        }
/*          {
            path: ':id',
            component: ProteinDetailsComponent,
            children: [
               {
                    path: 'reference/:id'
                }
            ]
        } */

      ]  
    },
//    { path: 'protein/reference/:id', component: ProteinReferenceDetailsComponent } ,
  //  { path: 'proteins/:id', component: ProteinDetailsComponent } ,
 //   { path: 'categories', component: CatComponent } 
   // { path: '', component: CatComponent }
  
  ];

  @NgModule({
    declarations: [
      

    ],
    imports: [
      RouterModule.forRoot(appRoutes),
    ],
  
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const routingComponents = [

    ProteinComponent,
    ProteinDetailsComponent,
    ProteinReferenceDetailsComponent,
    ProteinListComponent,

    OrganismListComponent,
    OrganismComponent,
    OrganismDetailsComponent,

    AdminComponent,
    TemplateModalComponent,
    DataTableComponent,
   // SidebarComponent,
    BrowseComponent,
    BlogComponent,
    PostDetailsComponent
  ]
  