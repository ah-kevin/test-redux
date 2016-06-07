/**
 * Created by dg_lennon on 16/6/5.
 */
import  {REVERSE_STATION, CHANGE_TRAIN_NO} from '../constants/tarinDate';
import {requestDate, receiveData, failData,failList,receiveList,requestList} from './fetch-train';
import {changeRoute} from './index';
import fetch from 'isomorphic-fetch';
import {TomorrowDate} from '../utils/util';
import config from '../config'
import {message} from 'antd';
import {browserHistory} from 'react-router';
import immutable from 'immutable';

export function reverse_station () {
  return {
    type: REVERSE_STATION
  }
}
export function changeTrainNo (value) {
  return {
    type: CHANGE_TRAIN_NO,
    payload: value
  }
}

/**
 * 车次详情查询
 */
export function gettraindetail (trainNo) {
  return (dispatch, getState)=> {
    const isFetch = getState().get('isFetching')
    //检测是否在请求
    if (isFetch) {
      return
    }
    //发送请求
    dispatch(requestDate());
    return fetch(`${config.qunaer}/traindetail?version=${config.version}&train=${trainNo}&date=${TomorrowDate}`, {
      method: 'get',
      headers: {
        'apikey': config.apikey
      }
    })
      .then(res=> {
        if (res.ok) {
          return res.json()
        }
        console.log('请求失败');
      })
      .then(res=> {
        if (res.ret) {
          dispatch(receiveData(immutable.fromJS(res.data)))
          browserHistory.push('/trainDate/detail')
          dispatch(changeRoute('车次详情'))
        } else {
          dispatch(failData(res.errmsg))
          message.error(res.errmsg, 1.5);
        }
      })
      .catch(err=> {
        dispatch(failData(err));
        message.error(err, 1.5);
      })
  }
}

/**
 *  站到站查询
 *
 */
export function s2ssearch (from,to) {
  return (dispatch,getState)=>{
    const isFetch=getState().get('isFetching')
    if(isFetch){
      return
    }
    dispatch(requestList());
    return fetch(`${config.qunaer}/s2ssearch?version=${config.version}&from=${from}&to=${to}&date=${TomorrowDate}`,{
      method:'get',
      headers:{
        'apiKey':config.apikey
      }
    })
      .then(res=>{
        if(res.ok){
          return res.json()
        }
        message.error('请求失败',1.5)
      })
      .then(res=>{
        if(res.ret){
          dispatch(receiveList(immutable.fromJS(res.data)))
          dispatch(changeRoute(`${from}->${to}`));
          browserHistory.push('/trainDate/list')
        }else{
          dispatch(failList(res.errmsg))
          message.error(res.errmsg,1.5);
        }
      })
      .catch(err=>{
        dispatch(failList(err));
        message.error(err,1.5);
      })
  }
}
