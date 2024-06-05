// src/store/reducers/userReducer.js
import { Map } from 'immutable';
import { LOGIN_SUCCESS, LOGOUT } from '../actions/userActions';

const initialState = Map({
  user: null,
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set('user', action.payload);
    case LOGOUT:
      return state.set('user', null);
    default:
      return state;
  }
};

export default userReducer;