<<<<<<< HEAD

import {CLICK_UPDATE_VALUE} from './actions/actionstypes'

const initialState = { 

    newValue: '' 
  
  }; 
  
  export const clickReducer = (state = initialState, action) => { 
  
    switch (action.type) { 
  
      case 'CLICK_UPDATE_VALUE': 
  
        return { 
  
          ...state, 
  
          newValue: action.newValue 
  
        }; 
  
      default: 
  
        return state; 
  
    } 
  
=======

import {CLICK_UPDATE_VALUE} from './actions/actionstypes'

const initialState = { 

    newValue: '' 
  
  }; 
  
  export const clickReducer = (state = initialState, action) => { 
  
    switch (action.type) { 
  
      case 'CLICK_UPDATE_VALUE': 
  
        return { 
  
          ...state, 
  
          newValue: action.newValue 
  
        }; 
  
      default: 
  
        return state; 
  
    } 
  
>>>>>>> 21f872c8d7973b81b09bdd803947f83ac65213ec
  }; 