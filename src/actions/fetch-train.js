import {FAIL_DATA, RECEIVE_DATA, REQUEST_DATA,RECEIVE_LIST,REQUEST_LIST,FAIL_LIST} from '../constants/tarinDate';

export function requestDate () {
  return {
    type: REQUEST_DATA
  }
}
export function failData (err) {
  return {
    type: FAIL_DATA,
    payload: err,
    error: true
  }
}
export function receiveData (data) {
  return {
    type: RECEIVE_DATA,
    payload: data
  }
}
export function requestList () {
  return {
    type: REQUEST_LIST
  }
}
export function failList (err) {
  return {
    type: FAIL_LIST,
    payload: err,
    error: true
  }
}
export function receiveList (data) {
  return {
    type: RECEIVE_LIST,
    payload: data
  }
}

