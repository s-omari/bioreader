import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

//  id:number;
  posts:any;

  constructor(
    private api : ApiService,
    private router : Router
  ) { }

  ngOnInit() {
    this.getPosts();
  }


  getPosts() {
    this.api.getAll('blogpost' , 15 , 0 ).subscribe(data=> {
    this.posts =  data.data;
   // console.log( this.posts);
    });
}

onItemSelect(selected) {
  console.log('selected ID: '+selected.id);
  console.log(selected);
   this.router.navigate(['./blog', selected.id]);
}


}
