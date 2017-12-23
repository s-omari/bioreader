import {Action} from '@ngrx/store';
import {type} from "../util";

/*
 Layout actions are defined here
 */

/*export const LayoutActionTypes = {
	OPEN_MODAL: '[Layout] Open modal', 
	CLOSE_MODAL: '[Layout] Close modal'

};*/

// Modal actions
export const OPEN_MODAL = '[Layout] Open modal';
export const CLOSE_MODAL = '[Layout] Close modal';

/*
 Modal actions
 */
export class OpenModalAction implements Action {
    readonly type = OPEN_MODAL;

    constructor(public payload: string) {  }
}

export class CloseModalAction implements Action {
    readonly type = CLOSE_MODAL;

    constructor() { }
}

export type LayoutActions = CloseModalAction | OpenModalAction 