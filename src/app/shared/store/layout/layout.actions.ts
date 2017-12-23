import {Action} from '@ngrx/store';
import {type} from "../util";

/*
 Layout actions are defined here
 */



//Alerts
export const ADD_ALERT = '[Layout] add alert';
export const REMOVE_ALERT = '[Layout] remove alert';
// Modal actions
export const OPEN_MODAL = '[Layout] Open modal';
export const CLOSE_MODAL = '[Layout] Close modal';
//Left sidenav actions
export const OPEN_LEFT_SIDENAV = '[Layout] Open LeftSidenav';
export const CLOSE_LEFT_SIDENAV = '[Layout] Close LeftSidenav';

//Right sidenav actions
export const OPEN_RIGHT_SIDENAV = '[Layout] Open RightSidenav';
export const CLOSE_RIGHT_SIDENAV = '[Layout] Close RightSidenav';
export const SET_RIGHT_CONTENT = '[Layout] Set Right content';

export const EXPAND_RIGHT_SIDENAV = '[Layout] Expand right sidenav';
export const COLLAPSE_RIGHT_SIDENAV = '[Layout] Collapse right sidenav';
//Window resize action
export const RESIZE_WINDOW = '[Layout] Resize window';


/*
 Alert actions
 */
export class AddAlertAction implements Action {
    readonly type = ADD_ALERT;

    constructor(public payload: Object) {
    }
}

export class RemoveAlertAction implements Action {
    readonly type = REMOVE_ALERT;

    constructor(public payload: Object) {
    }
}
/*
 Window actions
 */

export class ResizeWndowAction implements Action {
    readonly type = RESIZE_WINDOW;

    constructor(public payload: Object) {
    }
}

/*
 Modal actions
 */
export class OpenModalAction implements Action {
    readonly type = OPEN_MODAL;

    constructor(public payload: string) {
    }
}

export class CloseModalAction implements Action {
    readonly type = CLOSE_MODAL;

    constructor() {
    }
}

/*
 Sidenav  actions
 */

export class OpenLeftSidenavAction implements Action {
    readonly type = OPEN_LEFT_SIDENAV;

    constructor() {
    }
}
export class CloseLeftSidenavAction implements Action {
    readonly type = CLOSE_LEFT_SIDENAV;

    constructor() {
    }
}
export class OpenRightSidenavAction implements Action {
    readonly type = OPEN_RIGHT_SIDENAV;

    constructor() {
    }
}

export class CloseRightSidenavAction implements Action {
    readonly type = CLOSE_RIGHT_SIDENAV;

    constructor() {
    }
}

export class ExpandRightSidenavAction implements Action {
    readonly type = EXPAND_RIGHT_SIDENAV;

    constructor() {
    }
}

export class CollapseRightSidenavAction implements Action {
    readonly type = COLLAPSE_RIGHT_SIDENAV;

    constructor() {
    }
}


export class SetRightContentAction implements Action {
    readonly type = SET_RIGHT_CONTENT;

    constructor(public payload: string) {
    }
}


export type LayoutActions = CloseModalAction | OpenModalAction | CloseLeftSidenavAction |
    OpenLeftSidenavAction | OpenRightSidenavAction | CloseRightSidenavAction | 
    ExpandRightSidenavAction | CollapseRightSidenavAction | 
    ResizeWndowAction | AddAlertAction | RemoveAlertAction | SetRightContentAction

