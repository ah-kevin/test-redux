/**
 * Created by dg_lennon on 16/6/4.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import TrainTile from './tarinTtile';
import {Row,Col} from 'antd';

import {immutableRenderDecorator} from 'react-immutable-render-mixin';
@immutableRenderDecorator
class TrainStation extends Component {
  render () {
    return (
      <div className="trainStation">
        <Row type="flex" justify="center" align="middle">
          <TrainTile title="车次查询"></TrainTile>
          <Col span={23} className='content'>
            <input type="text"/>
            <div className="select" >
              <Row type="flex" justify="center" align="middle" >
                <Col span={10}>
                  <small>出发地</small>
                  <span>合肥</span>
                </Col>
                <Col span={3}>2</Col>
                <Col span={10}>2</Col>
              </Row>
            </div>
              <button>查询车次</button>
          </Col>
        </Row>
      </div>
    );
  }
}

TrainStation.propTypes = {};
TrainStation.defaultProps = {};

export default TrainStation;

