import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { BlogComponent } from './blog.component';
//import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListingComponent } from './post-listing/post-listing.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
     ]
})
export class BlogModule { }

export const BlogComponents = [ 
  PostListingComponent 
]