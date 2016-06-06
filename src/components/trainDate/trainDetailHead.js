/**
 * Created by dg_lennon on 16/6/6.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {Row, Col} from 'antd';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
const train_arrow = require('../../images/train_big.png');
@immutableRenderDecorator
class trainDetailHead extends Component {
  render () {
    const {state,trainNo} =this.props
    return (
      <div>
        <div className="trainDetail_head">
          <Row type="flex" justify="center" align="middle">
            <Col span={8}>
              <div className="start-train">
                <p>{state.get('start')}</p>
                <span>{state.get('startTime')}</span>
                <small>始发站</small>
              </div>
            </Col>
            <Col span={8}>
              <div className="train-info">
                <p>{trainNo} 快速</p>
                <img src={train_arrow} alt=""/>
                <small>{state.get('totalTime')}</small>
              </div>
            </Col>
            <Col span={8}>
              <div className="end-train">
                <p>{state.get('end')}</p>
                <span>{state.get('endTime')}</span>
                <small>终点站</small>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

trainDetailHead.propTypes = {};
trainDetailHead.defaultProps = {};

export default trainDetailHead;

