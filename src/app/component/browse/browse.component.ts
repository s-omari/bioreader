import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../service/api.service';
import { ProteinService } from '../../shared/service/protein.service';
import { Router , NavigationStart } from "@angular/router";
import { Store } from "@ngrx/store";
//import { ApplicationState } from "../../shared/store/application-state";
//import { LoadProteinsAction } from "../../shared/store/actions";


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  //@Input() table;
  table: string;
	data: any;
  constructor(
    private api: ApiService ,
//    private proteinService: ProteinService , 
    private router:Router ,
   )  {


     }




  ngOnInit() {
 //   console.log(this.router.url);
  this.router.events.subscribe((event) => {
    if(event instanceof NavigationStart) {
      this.setTable(this.router.url);
      this.getAllData(this.table);
      console.log(this.router.url);
    }

 
}); 




  //  this.proteinService.getProteins().subscribe(  );
  }

	onItemSelect(selected) {
    console.log('selected ID: '+selected.id+' from '+this.table);
    console.log(selected);
		//this.index = index;
		//this.selectedItem = selected;
	//	this.itemSelected = true;
	//	this.showLeft = 'itemPreview';
  //	console.log('index set to ' + this.index);
     this.router.navigate(['./proteins', selected.id]);
  }
  
  getAllData(table) {
		this.api.getAll(table, 15, 0).subscribe(data => {
			this.data = data.data;
			console.log( this.data);
		});
  }
  

  setTable(route) {
    if (this.router.url == '/browse/proteins') {
      this.table = 'protein';
    }
    else if (this.router.url == '/browse/organisms'){
      this.table = 'organism';
    }
    else if (this.router.url == '/browse/categories'){
      this.table = 'categorie';
    }

    console.log('table set to: '+this.table)
  }
}
