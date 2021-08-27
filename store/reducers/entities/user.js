import {combineReducers} from 'redux';

const INIT_STATE = {
  profile: null,
  all_tasks:[]
};

const userInfo = (state = INIT_STATE, action) => {

    // console.log("ReCHED")
  switch (action.type){
      case "SAVE_PROFILE":
          return {
              ...state,
              profile:action.payload
          };
      
      case "SAVE_TASKS":
        return {
          ...state,
          all_tasks:action.payload
        };

      default:

      return state;
  }
};

export default combineReducers({
  userInfo,
});
