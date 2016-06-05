/**
 * Created by dg_lennon on 16/6/5.
 */
import immutable from 'immutable';
import {combineReducers} from 'redux-immutable';
import {REVERSE_STATION} from '../constants/tarinDate';
import {REQUEST_DATA,RECEIVE_DATA,FAIL_DATA} from '../constants/fetch';

/**
 * 站到站的起始切换
 * @type {any|*}
 */
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

//车次查询
const traindetailState=immutable.fromJS({
  isFetching:false,
  data:{},
  error:''
})
function  traindetail(state=traindetailState,action) {
  switch (action.type){
    case REQUEST_DATA:
      return state.set('isFetching',true);
    case FAIL_DATA:
      return immutable.fromJS({
        isFetching:false,
        error:action.payload,
        data:{}
      })
    case RECEIVE_DATA:
      return immutable.fromJS({
        isFetching:false,
        data:action.payload,
        error:''
      })
    default:
      return state;
  }
}

export default combineReducers({
  selectStation,
  traindetail
});
