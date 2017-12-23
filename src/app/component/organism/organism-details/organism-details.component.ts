import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../../../service/api.service';


@Component({
  selector: 'organism-details',
  templateUrl: './organism-details.component.html',
  styleUrls: ['./organism-details.component.css']
})
export class OrganismDetailsComponent implements OnInit {
  id: number;
  organism: any;
  taxid:string;
  ncbi: any;
  ebi: any;
  mygene: any;


  constructor(
    private route: ActivatedRoute ,
    private api : ApiService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.getOrganism(this.id);
   // this.getOrganismData(this.taxid);
  }


  getOrganism(id) {
  	this.api.getItem('organism' , id).subscribe(data=> {
    this.organism =  data.data;
    this.taxid = data.data.taxid;
    this.getOrganismData(data.data.taxid);
	});
    }

    getOrganismData( id){

      this.api.getNCBIsummary('taxonomy' , id).subscribe(data=> {
        console.log('getNCBIsummary');
        console.log(data);
        this.ncbi = data;
      });

      this.api.getEbiTax(id).subscribe(data=> {
        console.log('getEbiTax');
        console.log(data);
        this.ebi = data;
      });
      this.api.getMygeneSpecies(id).subscribe(data=> {
        console.log('getMygeneSpecies');
        console.log(data);
        this.mygene = data;
      });



    }

}
