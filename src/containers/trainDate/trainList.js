/**
 * Created by dg_lennon on 16/6/7.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {Row, Col} from 'antd';
import {connect} from 'react-redux';
import ListItem from '../../components/trainDate/ListItem';

import {immutableRenderDecorator} from 'react-immutable-render-mixin';
let start = require('../../images/shi.png');
let end = require('../../images/zhong.png');
let guo = require('../../images/guo.png');
@immutableRenderDecorator
class trainList extends Component {
  render () {
    const { data} =this.props;
    let trainList = data.map((item, index)=>
      <Row type="flex" justify="center" align="middle" className="list" key={index}>
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
          <ListItem one="12" two="12" one_text="一等座" two_text="123.22"/>
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
  })
)(trainList);

