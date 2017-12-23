import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../../../service/api.service';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  id: number;
  post: any;

  constructor(
    private route: ActivatedRoute ,
    private api : ApiService
  ) { }


  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.getPost(this.id);
   // this.getpostData(this.taxid);
  }


  getPost(id) {
  	this.api.getItem('blogpost' , id).subscribe(data=> {
    this.post =  data.data;
	});
    }

}
