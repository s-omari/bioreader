import { Component, OnInit , ChangeDetectorRef  } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { ActivatedRoute } from "@angular/router";

//menu items
import {Items} from './admin-menu';
import * as formConfigs from './formConfigs';

//Dynamic forms
import { FieldConfig } from '../shared/dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from '../shared/dynamic-form/containers/dynamic-form/dynamic-form.component';

//NEW REDUX
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import * as fromRoot from '../../shared/store/index';
/*
 * Import the layout actions to make dispatching from the component possible.
 */
import * as layout from '../../shared/store/layout/layout.actions';
import * as uiState from '../../shared/store/uistate/uistate.actions';
import * as admin from '../../shared/store/admin/admin.actions';
//import * as games from './component/shared/games/games.actions';

//import {  } from "ngx-monaco-editor";

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css'],
	//changeDetection:
})
export class AdminComponent implements OnInit {
	public selectedTableName$: Observable<any>;
	public selectedItemId$: Observable<any>;

	public showLeft$ : Observable<any>;
	public rightContent$ : Observable<any>;
	public showRight$ : Observable<any>;
	public rightExpanded$: Observable<any>;

	
	items= Items; //imported menu file

	
	selectedItemId: any;
	table: string;
	data: any;
	count: number;
	//
	index: number;
	item:any;
	itemSelected: boolean = false;
	rightContent: string = '';

	

	//Dynamic form
	config: FieldConfig[];



// UI
//rightExpanded: boolean = false;
centerExpanded: boolean = true;
//showRight: boolean = false;
	

	constructor(
		private cdRef:ChangeDetectorRef,
		private api: ApiService , 
		private route: ActivatedRoute,
		private store: Store<fromRoot.AppState>
	) { 
		this.selectedTableName$ = store.select(fromRoot.getAdminSelectedTableName);
		this.selectedItemId$ = store.select(fromRoot.getAdminSelectedTableName);

		this.rightExpanded$ = store.select(fromRoot.getLayoutRightExpandedState);
		this.showRight$ = store.select(fromRoot.getLayoutRightSidenavState);
		this.showLeft$ = store.select(fromRoot.getLayoutLeftSidenavState);
		this.rightContent$ = store.select(fromRoot.getLayourRightContentState);

	}

	ngOnInit() {
		this.store.subscribe(
			state => {
				console.log(' admin got state ' , state);
			//	this.table = state.admin.selectedTableName;
			//	this.selectedItemId = state.admin.selectedItemId;
			//	this.showRight = state.layout.rightSidebarOpened;
			//	this.rightExpanded = state.layout.rightSidebarExpanded;
			}
		);	
	}




	submitUpdate(item){// called when the update item button is  
		 this.api.updateItem( this.table ,  item.id , item ).subscribe(data=> {
			console.log(data);
			//add to database
			if(data.status) {
			//if successfull 
			//get rid of the form , show itemPreview
		//		this.closeUpdateForm();
			}
		});
		this.config=[];
	}



	submitCreate(item){

		this.api.addItem( this.table ,  item ).subscribe(data=> {
			//add to database
			if(data.status) {
			//if successfull 
			//get rid of the form , show itemPreview
			//	this.closeUpdateForm();
			}
		});

		this.config=[];
	//	this.rightExpanded =false;
		this.store.dispatch(new layout.CollapseRightSidenavAction);		
	}
	selectTable(table) {
		

		this.store.dispatch(new layout.CloseRightSidenavAction);
		this.store.dispatch(new layout.CollapseRightSidenavAction);
		this.store.dispatch(new admin.SelectTableAction(table));

		this.getAllData(table);

		this.config=[]; // form fields
	//			if(this.rightExpanded$){
	//				this.store.dispatch(new layout.CollapseRightSidenavAction);
				//	this.store.dispatch(new layout.CloseRightSidenavAction);
				//	this.centerExpanded =false;
	//			} //else this.centerExpanded =true;

	}

/* 	setTable(table) {
		this.table = table;
	} */
	//Get proteins
	getAllData(table) {
		this.api.getAll(table, 15, 0).subscribe(data => {
			this.data = data.data;
			this.count = this.data.length;
			//console.log( this.data);
		});
	}



	openCreateForm(table) {
		this.store.dispatch(new admin.SelectTableAction(table));
		this.config=[];
		this.generateForm('create');
		this.rightContent = 'createForm';
	//	this.rightExpanded =true;
		console.log('this.rightContent: '+this.rightContent);
	}

	///UI INTERRACTIONS
	//when update button clicked
	openUpdateForm(id) {
		this.config=[];
		this.generateForm('update');
		//this.rightContent = 'updateForm';
		this.store.dispatch(new layout.SetRightContentAction('updateForm'));
		this.store.dispatch(new layout.ExpandRightSidenavAction);	

		console.log('message from admin.ts openUpdateForm , id= '+id);
	}


	//when an item is selected from data table
	onItemSelect(selected) {
		console.log('selected ID: '+selected.id+' from '+this.table);
		//this.index = index;
		this.item = selected;

		//NEWREDUX

	//	this.selectedItemId = this.state.uistate.selectedItemId;
	//	this.itemSelected = true;
	setTimeout(() => {

				
		this.store.dispatch(new admin.SelectItemIdAction(selected.id));		
		this.store.dispatch(new layout.OpenRightSidenavAction);
		this.store.dispatch(new layout.CollapseRightSidenavAction);
		this.store.dispatch(new layout.SetRightContentAction('itemPreview'))


		//this.rightContent = ;
	//	this.centerExpanded = false;
	//	this.rightExpanded = true;
	})

	//	console.log('index set to ' + this.index);
	}
	/////////////

	matchFields(config) {
		for (var field in config) {
			for (var property in this.data) { // get all fieldname matching to selected item property
				if(config[field].name == property) {
					config[field].value = this.data[property];
					console.log(property);
				}
			}	
		}
	}

	addFields( from , to){
		for (var field of from) {
			to.push(field);
		}
	}
	removeFields(config){
		for (var field of config) {
			config.pop();
			console.log("removed!"+config);
		}
	}

	generateForm(formType) {
		this.removeFields(this.config);		
	//	console.log("removed!"+this.config);

	console.log('from generateForm(formType) , \n formType= '+formType+' ,\n  table= '+this.table);

		if (formType == 'update') {
			if (this.table == 'protein') {
				this.config =  formConfigs.proteinFields ;
				this.addFields( formConfigs.updateFields , this.config);
				this.matchFields(this.config);
			 }
 			else if (this.table == 'categorie') { 
				this.config =  formConfigs.categoryFields ;
				this.addFields( formConfigs.updateFields , this.config);
				this.matchFields(this.config);
			}
			else if (this.table == 'proteintype') { 
				this.config =  formConfigs.proteinTypeFields ;
				this.addFields( formConfigs.updateFields , this.config);
				this.matchFields(this.config);
			}
			else if  (this.table == 'proteinreference') { 
				this.config =  formConfigs.proteinReferenceFields ;
				this.addFields( formConfigs.updateFields , this.config);
				this.matchFields(this.config);
			} 
			else if (this.table == 'organism') { 
				this.config = formConfigs.organismFields ;	
				this.addFields( formConfigs.updateFields , this.config);
				this.matchFields(this.config);	
			 }
			 else if (this.table == 'blogpost') { 
				this.config = formConfigs.blogPostFields ;	
				this.addFields( formConfigs.updateFields , this.config);
				this.matchFields(this.config);	
			 }
			 else if (this.table == 'tag') { 
				this.config = formConfigs.tagFields ;	
				this.addFields( formConfigs.updateFields , this.config);
				this.matchFields(this.config);	
			 }
			 

		} else if (formType == 'create') {
			if (this.table == 'protein') {
				this.config =  formConfigs.proteinFields ;
				this.addFields( formConfigs.submitButton , this.config);
				
			 }
 			else if (this.table == 'categorie') { 
				this.config =  formConfigs.categoryFields ;
				this.addFields( formConfigs.submitButton , this.config);
				
			}
			else if (this.table == 'proteintype') { 
				this.config =  formConfigs.proteinTypeFields ;
				this.addFields( formConfigs.submitButton , this.config);
				
			}
			else if  (this.table == 'proteinreference') { 
				this.config =  formConfigs.proteinReferenceFields ;
				this.addFields( formConfigs.submitButton , this.config);
				
			} 
			else if (this.table == 'organism') { 
				this.config = formConfigs.organismFields ;	
				this.addFields( formConfigs.submitButton , this.config);
					
			 }
			 else if (this.table == 'blogpost') { 
				this.config = formConfigs.blogPostFields ;	
				this.addFields( formConfigs.submitButton , this.config);
				
			 }
			 else if (this.table == 'tag') { 
				this.config = formConfigs.tagFields ;	
				this.addFields( formConfigs.submitButton , this.config);
				
			 }
			 

		}



	}

	toggleRightExpand() {
		if (this.rightExpanded$) { 
			this.store.dispatch(new layout.CollapseRightSidenavAction);
		//	this.rightExpanded=!this.rightExpanded
		}
		else {
	//		this.rightExpanded$ = true
			this.store.dispatch(new layout.CollapseRightSidenavAction);
		}
	}

	toggleCenterExpand() {
		
		if (this.centerExpanded) { 
			this.centerExpanded=!this.centerExpanded
		}
		else {this.centerExpanded = true}
	}

}
