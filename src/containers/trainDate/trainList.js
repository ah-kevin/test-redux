/**
 * Created by dg_lennon on 16/6/7.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {Row, Col} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/trainDate';


import ListItem from '../../components/trainDate/ListItem';

import {immutableRenderDecorator} from 'react-immutable-render-mixin';
let start = require('../../images/shi.png');
let end = require('../../images/zhong.png');
let guo = require('../../images/guo.png');
@immutableRenderDecorator
class trainList extends Component {
  render () {
    const {data,actions} =this.props;
    let trainList = data.map((item, index)=>
    <Row type="flex" justify="center" align="middle" className="list" key={index} onTouchTap={()=>{
      actions.gettraindetail(item.get('trainNo'))
      actions.changeTrainNo(item.get('trainNo'))
    }
      }>
        <Col span="5">
          <b>{item.get('trainNo')}</b>
          <small>{item.get('duration')}</small>
        </Col>
        <Col span="6">
          <b>{item.get('startTime')}</b>
          <small>{item.get('endTime')}</small>
        </Col>
        <Col span="6" className='station'>
          <ListItem one="6" two="18" img={start} two_text={item.get('from')}/>
          <ListItem one="6" two="18" img={end} two_text={item.get('to')}/>
        </Col>
        <Col span="7" className='station'>
          {item.get('seatInfos').map((list,index)=>
            <ListItem key={index} one="12" two="12" one_text={list.get('seat')} two_text={list.get('seatPrice')}/>
          )}
        </Col>
      </Row>
    )
    return (
      <div className="trainList">
        {trainList}
      </div>
    );
  }
}

trainList.propTypes = {};
trainList.defaultProps = {};

export default connect(
  state=>({
    data: state.getIn([ 'trainDate', 'trainList', 'data' ])
  }),
  dispatch=>({
    actions:bindActionCreators(actions,dispatch)
  })
)(trainList);

