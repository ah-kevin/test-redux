/**
 * Created by dg_lennon on 16/6/5.
 */
import immutable from 'immutable';
import {combineReducers} from 'redux-immutable';
import {REVERSE_STATION,EDIT_STATION,CLEAR_STATION,CHANGE_TRAIN_NO, RECEIVE_DATA, REQUEST_DATA, FAIL_DATA,REQUEST_LIST,RECEIVE_LIST,FAIL_LIST} from '../constants/tarinDate';
const trainNoState = immutable.fromJS({
  trainNo: ''
})
function trainNo (state = trainNoState, action) {
  switch (action.type) {
    case CHANGE_TRAIN_NO:
      return trainNoState.set('trainNo', action.payload)
    default:
      return state
  }
}
/**
 * 站到站的起始切换
 * @type {any|*}
 */
const stationState = immutable.fromJS({
  start: '',
  end: '',
  isreverse: false
});
function selectStation (state = stationState, action) {
  switch (action.type) {
    case REVERSE_STATION:
      return immutable.fromJS({
        start: state.get('end'),
        end: state.get('start'),
        isreverse: !state.get('isreverse')
      });
    case EDIT_STATION:
      return immutable.fromJS({
        start: '合肥',
        end: '上海',
        isreverse: false
      });
    case CLEAR_STATION:
      return immutable.fromJS({
        start: '',
        end: '',
        isreverse: false
      });
    default:
      return state;
  }
}

//车次查询
const traindetailState = immutable.fromJS({
  isFetching: false,
  data: {
    header: {
      start: '',
      end: '',
      startTime: '',
      endTime: '',
      totalTime: ''
    },
    items: {}
  },
  error: ''
})
function traindetail (state = traindetailState, action) {
  switch (action.type) {
    case REQUEST_DATA:
      return state.set('isFetching', true);
    case FAIL_DATA:
      return immutable.fromJS({
        isFetching: false,
        error: action.payload,
        data: {}
      })
    case RECEIVE_DATA:
      return immutable.fromJS({
        isFetching: false,
        data: {
          header: {
            start: action.payload.getIn([ 'info', 'value' ]).getIn([ 0, 1 ]),
            end: action.payload.getIn([ 'info', 'value' ]).getIn([ -1, 1 ]),
            startTime: action.payload.getIn([ 'info', 'value' ]).getIn([ 0, 4 ]),
            endTime: action.payload.getIn([ 'info', 'value' ]).getIn([ -1, 4 ]),
            totalTime: action.payload.getIn([ 'extInfo', 'totalTime' ])
          },
          items: action.payload.getIn([ 'info', 'value' ]).map((item, index)=>immutable.fromJS([ item.get(1), item.get(3), item.get(4), item.get(5) ]))
        },
        error: ''
      })
    default:
      return state;
  }
}

//站到站车次列表
const trainListState = immutable.fromJS({
  isFetching: false,
  error:'',
  data:[]
});
function trainList (state = trainListState, action) {
  switch (action.type) {
    case REQUEST_LIST:
      return state.set('isFetching',true);
    case FAIL_LIST:
      return immutable.fromJS({
        isFetching:false,
        error:action.payload,
        data:[]
      });
    case RECEIVE_LIST:
      return immutable.fromJS({
        isFetching:false,
        error:'',
        data:action.payload.get('trainList')
      })
    default:
      return state;
  }

}

export default combineReducers({
  selectStation,
  trainNo,
  traindetail,
  trainList
});
