/**
 * Created by dg_lennon on 16/6/5.
 */
import immutable from 'immutable';
import {combineReducers} from 'redux-immutable';
import {REVERSE_STATION} from '../constants/tarinDate';

const stationState = immutable.fromJS({
  start: '合肥',
  end: '上海',
  isreverse:false
});
function selectStation (state = stationState, action) {
  switch (action.type) {
    case REVERSE_STATION:
      return immutable.fromJS({
        start: state.get('end'),
        end: state.get('start'),
        isreverse:!state.get('isreverse')
      })
    default:
      return state;
  }
}

export default combineReducers({
  selectStation
});
