import {FAIL_DATA, RECEIVE_DATA, REQUEST_DATA} from '../constants/fetch';

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
