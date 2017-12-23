import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// get api service
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-protein',
  templateUrl: './protein.component.html',
  styleUrls: ['./protein.component.css']
})
export class ProteinComponent implements OnInit {

//data
proteins: any;
count: number;

// protein properties
index : number;
id: number;
name: String;
image: String;
description: String;
accession: String;
type:String;




type_id;
proteinTypes:any;


proteinObj: any;


// UI stuff
proteinSelected: boolean
showUpdateForm: boolean;
showLeft:string;

//
dataItems:any;
selectedColumn:string;

constructor(
	 private api : ApiService,
	 private router : Router) { }

ngOnInit() {
  	//this.getPROT();
  	this.getProteinTypes();
  	this.getAllProteins();
  //	this.setDatatable(this.proteins);
  	
}


onItemSelect(selected) {
    console.log('selected ID: '+selected.id);
    console.log(selected);
		//this.index = index;
		//this.selectedItem = selected;
	//	this.itemSelected = true;
	//	this.showLeft = 'itemPreview';
  //	console.log('index set to ' + this.index);
     this.router.navigate(['./proteins', selected.id]);
  }


setDatatable( table ){
	this.dataItems = table;
	console.log(this.dataItems);
}
//Get proteins
getAllProteins() {
	this.api.getAll('protein' , 15 , 0 ).subscribe(data=> {
	this.proteins =  data.data;
	
	this.setDatatable(data.data);
	this.count = this.proteins.length;
	console.log( this.proteins);

	});
}
//adding a protein
addProtein() {
	let protein = {
		name: this.name ,
		description: this.description ,
		image: this.image ,
		accession: this.accession,
		type_id: this.type_id
	};

	this.api.addItem('protein' , protein ).subscribe(data => { 
		//console.log(data)
		if(data.status) {
			this.proteins.push({
				id: data.data.id , 
				name: data.data.name ,
				description: data.data.description ,
				accession: data.data.accession ,
				image: data.data.image ,
				type_id: data.data.type_id
			});

			this.name = "";
			this.description = "";
			this.accession = "";
			this.image = "";
			this.type_id = "";

		}
	 });

};




//adding a protein
addProteinType() {
	let proteinType = {
		type: this.type 
	};
	this.api.addItem('proteintype' , proteinType ).subscribe(data => { 
		console.log(data)
		if(data.status) {
/*			this.proteins.push({
				type_id: data.data.type_id
			});
*/
			this.type = "";
		}
	 });
};

getProteinTypes() {
	this.api.getAll('proteintype' , 10 , 0  ).subscribe(data=> {
	this.proteinTypes =  data.data;
	//this.count = this.proteins.length;
//	console.log( this.proteinTypes);
	});
}


selectProteinIndex(index , id) {
	this.name = this.proteins[index].name;
 	this.image = this.proteins[index].image;
 	this.description = this.proteins[index].description;
 	this.accession = this.proteins[index].accession;
 	this.index = index;
 	this.id = id;
 	this.type_id = this.proteins[index].type_id;

 	this.type = this.proteinTypes[this.type_id-1].type;
 	//console.log(this.type);

 	this.proteinSelected = true;
 	this.showLeft = 'proteinPreview';
}
clearSelectedProtein() {
	this.name = '';
 	this.image = '';
 	this.description = '';
 	this.accession = '';
 	this.index = 0;
 	this.id = 0;
 	this.type_id = 0 ;

}


 openUpdateForm(index , id) {
	this.selectProteinIndex(index , id);
 	this.showLeft = 'updateProteinForm' ;
 }


closeUpdateForm() {
	this.showLeft = '' ;
 	this.showLeft = 'proteinPreview';
}




 updateProtein() {
	let protein = {
		name: this.name ,
		description: this.description ,
	//	image: this.image ,
		accession: this.accession,
		type_id: this.type_id 		
	};

	this.api.updateItem('protein' ,  this.id , protein ).subscribe(data=> {
		//console.log(data);
		if(data.status) {
			this.proteins[this.index].name = protein.name
			this.proteins[this.index].description = protein.description  ;
		//	this.proteins[this.index].image = protein.image  ;
			this.proteins[this.index].accession = protein.accession  ;		
			this.proteins[this.index].type_id = protein.type_id  ;			
			this.closeUpdateForm();
		}
	});
}



// Delete a category
deleteProtein(protein) {
	this.api.deteteItem('protein' , protein.id).subscribe(data=> {
		if(data.status) {
			let index = this.proteins.indexOf(protein);
			this.proteins.splice(index , 1);
		}
	});
}





getPROT() { 
		this.api.EBIgetProtein().subscribe(data=> {
		this.proteinObj =  data.data;
		console.log( data.data );
		console.log( 'wtf');
	});
}




}
