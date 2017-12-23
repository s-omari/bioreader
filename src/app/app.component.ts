import {Component, OnInit, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

import { Router } from "@angular/router";



/**    // NEW REDUX
 * Import the root state in order to select parts of it.
 */
import * as fromRoot from './shared/store/index';
/*
 * Import the layout actions to make dispatching from the component possible.
 */
import * as layout from './shared/store/layout/layout.actions';
//import * as games from './component/shared/games/games.actions';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements  OnInit {
//  public openedModalName$: Observable<any>;
  table: string = '';

items = [

  {
    'title': 'Articles',
    'icon_class': 'flaticon-science9',
    'route': 'blog',
    'table': 'blogpost'
    },

{
'title': 'Protiens',
'icon_class': 'flaticon-adn',
'route': 'proteins',
'table': 'protein'
},

{
  'title': 'Organisms',
  'icon_class': 'flaticon-bacteria1',
  'route': 'organisms',
  'table': 'organism'
  },
  {
    'title': 'Admin',
    'icon_class': 'glyphicon glyphicon-user',
    'route': 'admin',
    'table': 'organism'
    }

];




  constructor(
     // NEW REDUX
    private store: Store<fromRoot.AppState> ,
    private router : Router
  ) {
  //  this.openedModalName$ = store.select(fromRoot.getLayoutOpenedModalName); 
	}
  ngOnInit() {}


  selectTable(table) {
		this.table = table;

		console.log('appcontrller.ts table set to:' + table)
	//	this.store.dispatch(new SelectTableAction(table));
  //	console.log(this.store);
  
/*   if (table == 'protein') {
      this.router.navigate(['browse/proteins']);
  } else if (table == 'organism') {
    this.router.navigate(['browse/organisms']);
  } */
	}



  
  handleOpenModal(modalName:string) {
   // this.store.dispatch(new layout.OpenModalAction(modalName));
  }

  handleCloseModal() {
   // this.store.dispatch(new layout.CloseModalAction());
  }





/*

 {
"title": "Blog",
"icon_class": 'flaticon-science9'
}, 
 {

"title": 'Techniques',
"icon_class": 'flaticon-chemistry6'
}, 

 {

"title": 'Materials',
"icon_class": 'flaticon-flask15'
}, 

 {

"title": 'Organisms',
"icon_class": 'flaticon-bacteria1'
}
*/

}