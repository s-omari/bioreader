import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-organism',
  templateUrl: './organism.component.html',
  styleUrls: ['./organism.component.css']
})
export class OrganismComponent implements OnInit {

  organisms: any;
  constructor(
    private api : ApiService,
    private router : Router
  ) { }

  ngOnInit() {
    this.getAllOrganisms();
  }



  getAllOrganisms() {
    this.api.getAll('organism' , 15 , 0 ).subscribe(data=> {
    this.organisms =  data.data;
    console.log( this.organisms);
    });
}


onItemSelect(selected) {
  console.log('selected ID: '+selected.id);
  console.log(selected);
   this.router.navigate(['./organisms', selected.id]);
}



}