/**
 * Created by dg_lennon on 16/6/6.
 */
/**
 * Created by dg_lennon on 16/6/6.
 */
import {CHANGE_ROUTER} from  '../constants/index';
export function changeRoute (value) {
  return {
    type:CHANGE_ROUTER,
    payload:value
  }
}
