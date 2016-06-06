/**
 * Created by dg_lennon on 16/6/2.
 */
import {LOCATION_CHANGE} from 'react-router-redux';
import {CHANGE_ROUTER} from  '../constants/index'
//noinspection JSUnresolvedVariable
import Immutable from 'immutable';
const initialState = Immutable.fromJS({
  locationBeforeTransitions: null,
  title:''
});
export default (state = initialState, action) => {
  switch (action.type){
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload
      });
    case CHANGE_ROUTER:
      return state.set('title',action.payload)
  }

  return state;
}
