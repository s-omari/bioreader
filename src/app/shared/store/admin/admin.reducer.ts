import * as admin from './admin.actions';



  export interface State {
    selectedTableName: string;
    selectedItemId:number;
  //  
}


export const initialState: State = {
    selectedTableName: undefined,
    selectedItemId: undefined
};
   /* The reducer of the layout state. 
   Each time an action for the layout is dispatched, 
   it will create a new state for the layout. */


export function reducer(state = initialState, action: admin.adminActions ): State {

    switch (action.type) {

    /*
      Modal cases
     */
    case admin.SELECT_TABLE: {
      const name = action.payload;
      return Object.assign({}, state, {
        selectedTableName:name
      });
    }
    
    case admin.SELECT_ITEM_ID: {
      const id = action.payload;
      return Object.assign({}, state, {
        selectedItemId:id
      });
    }

    default:
      return state;
    	 } 
}


export const getSelectedTableName = (state:State) => state.selectedTableName;


export const getSelectedItemId = (state:State) => state.selectedItemId;
