import {
    PROFILE_SAVE_DETAILS,
    PROFILE_SAVE_DETAILS_RESET
  } from './constants';
  
  export function saveDetails(data) {
    return {
      type: PROFILE_SAVE_DETAILS,
      data:data
    };
  }
  export function dataReset() {
    return {
      type: PROFILE_SAVE_DETAILS_RESET,
      };
  }
  
  export function reducer(state, action) {
    switch (action.type) {
      case PROFILE_SAVE_DETAILS:
        return {
          ...state,
          details:action.data
        };
   case PROFILE_SAVE_DETAILS_RESET:
        return {
          ...state,
          details:null
        };
      default:
        return state;
    }
  }
  