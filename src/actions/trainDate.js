/**
 * Created by dg_lennon on 16/6/5.
 */
import  {REVERSE_STATION,CHANGE_TRAIN_NO} from '../constants/tarinDate';
import {requestDate, receiveData, failData} from './fetch';
import fetch from 'isomorphic-fetch';
import {TomorrowDate} from '../utils/util';
import config from '../config'

export function reverse_station () {
  return {
    type: REVERSE_STATION
  }
}
export function changeTrainNo (value) {
  return{
    type:CHANGE_TRAIN_NO,
    payload:value
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
        console.log(res);
        if (res.ret) {
          dispatch(receiveData(res.data))
        } else {
          dispatch(failData(res.errmsg))
        }
      })
      .catch(err=>dispatch(failData(err)))
  }
}


