import { createReducer,on } from "@ngrx/store";
import { hide, show } from "./loading.actions";


const reducere = createReducer({},// reducer is created with the initial values of the state and a list of actions on which the riducer will work on top of  
    on(show,()=>{
        return{show:true};
    }),
    on(hide,()=>{
        return{show:false};
    }),
    );
     export function loadingReducer(  state:any , action:any ){
        return reducere(state,action)
    }