import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Actions Creators */
const {Types, Creators} = createActions({
  signInRequest: ['phone', 'password'],
  signInSuccess: ['token', 'user'],
  signInFailure: [],
  getMeRequest: ['userId'],
  getMeSuccess: ['user'],
  getMeFailure: [],
  autenticationSucess: [],
  autenticationRequest: [],
  signUpRequest: ['userData'],
  signUpSuccess: ['token', 'user'],
  signUpFailure: [],
  editRequest: ['userData', 'id'],
  editSuccess: ['user'],
  editFailure: [],
  updatePhotoRequest: ['photo', 'id'],
  updatePhotoSuccess: ['user'],
  updatePhotoFailure: [],
  signOut: [],
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  token: null,
  signed: false,
  loading: false,
  autenticated: false,
  user: {},
});

/* Reducers */
export const request = state => state.merge({loading: true});

export const successEdit = (state, {user}) =>
  state.merge({
    loading: false,
    user,
  });

export const success = (state, {token, user}) =>
  state.merge({
    signed: true,
    loading: false,
    token,
    user,
  });

export const getMeSuccess = (state, {user}) =>
  state.merge({
    loading: false,
    user,
  });

export const failure = state => state.merge({loading: false});

export const logout = state =>
  state.merge({
    token: null,
    signed: false,
    autenticated: false,
    user: {},
  });

export const autenticatedRequest = state => state.merge({loading: true});

export const autenticatedSucess = state =>
  state.merge({autenticated: true, loading: false});

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: request,
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_IN_FAILURE]: failure,
  [Types.GET_ME_REQUEST]: request,
  [Types.GET_ME_SUCCESS]: getMeSuccess,
  [Types.GET_ME_FAILURE]: failure,
  [Types.SIGN_UP_REQUEST]: request,
  [Types.SIGN_UP_SUCCESS]: success,
  [Types.SIGN_UP_FAILURE]: failure,
  [Types.EDIT_REQUEST]: request,
  [Types.EDIT_SUCCESS]: successEdit,
  [Types.EDIT_FAILURE]: failure,
  [Types.UPDATE_PHOTO_REQUEST]: request,
  [Types.UPDATE_PHOTO_SUCCESS]: successEdit,
  [Types.UPDATE_PHOTO_FAILURE]: failure,
  [Types.SIGN_OUT]: logout,
  [Types.AUTENTICATION_REQUEST]: autenticatedRequest,
  [Types.AUTENTICATION_SUCESS]: autenticatedSucess,
});
