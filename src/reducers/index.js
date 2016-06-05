/**
 * Created by dg_lennon on 16/5/31.
 */
import {combineReducers} from 'redux-immutable';
import routerReducer from './router-reducer';

import trainDate from './trainDate';
//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  routing:routerReducer,
  trainDate
});

export default rootReducer
