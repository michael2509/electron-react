import { GET_USERS, GET_SINGLE_USER } from '../actions/actionTypes';

const singleUser = (state = {}, action) => {
  if(action.type === GET_SINGLE_USER) {
    return Object.assign({}, state, action.user);
  }

  return state;
}

const users = (state = [], action) => {
  if(action.type === GET_USERS) {
    return [...state.slice(), ...action.users];
  }

  return state;
}

const appReducer = (state = {}, action) => {
  return {
    single_user: singleUser(state.single_user, action),
    users: users(state.users, action)
  }
}

const rootReducer = (state, action) => {
  if(action.type === GET_USERS) {
    state = undefined;
  }

  return appReducer(state, action);
}

export default rootReducer;