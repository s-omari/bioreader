import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// get api service
import { ApiService } from '../../../service/api.service';
//import 'sequence-viewer/src/sequence-viewer';

//import  {x2js} from  'xml2js/lib/xmlToJson.js';
//import  {x2js , xml2js} from  'xml2js/lib/xml2js.js';
//import  {x2js} from 'xml2js/lib/x2j.js';
//import  {xml2json , parseXml} from 'xml2js/lib/xml2json.js';

@Component({
  selector: 'app-protein-details',
  templateUrl: './protein-details.component.html',
  styleUrls: ['./protein-details.component.css']
})
export class ProteinDetailsComponent implements OnInit {



id: number;
protein: any;
xml: any;

gene: string;
lineage: any;
functions =[];

fasta: any;
sequence:any;
accession:string;

data: any;

proteinReferences:any;

  constructor( 
	  private route: ActivatedRoute ,
	 private api : ApiService) { }

  ngOnInit() {

  	//console.log(this.route);
  	this.id = this.route.snapshot.params.id;
	console.log(this.id);
  	this.getProtein(this.id);
  	this.getProteinReferences(this.id);

  	

  }

	getProteinType(id) {
  	this.api.getItem('proteintype' , id).subscribe(data=> {
	//this.proteinType =  data.data;
	this.protein['type'] = data.data.type; 
	console.log(data.data);

	});
	}

  getProtein(id) {
  	this.api.getItem('protein' , id).subscribe(data=> {
	this.protein =  data.data;
	this.accession = data.data.accession;
	this.getProteinType( data.data.type_id);
	});
  	}

getProteinReferences(id) {
	this.api.getReferences(id).subscribe(data=> {
		this.proteinReferences = data;
		console.log('proteinReferences');
		console.log(this.proteinReferences);
	});
}








}
            