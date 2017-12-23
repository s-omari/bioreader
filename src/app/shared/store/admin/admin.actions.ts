import {Action} from '@ngrx/store';
import {type} from "../util";

/*
 Layout actions are defined here
 */

/*export const LayoutActionTypes = {
	OPEN_MODAL: '[Layout] Open modal', 
	CLOSE_MODAL: '[Layout] Close modal'

};*/

// Table actions
export const SELECT_TABLE = '[admin] Select Table';
export const SELECT_ITEM_ID = '[admin] Select Item Id';

/*
DB table actions
 */
export class SelectTableAction implements Action {
    readonly type = SELECT_TABLE;
    constructor(public payload: string) {  }
}

export class SelectItemIdAction implements Action {
    readonly type = SELECT_ITEM_ID;
    constructor(public payload: number) {  }
}



export type adminActions =    SelectTableAction |
                                SelectItemIdAction