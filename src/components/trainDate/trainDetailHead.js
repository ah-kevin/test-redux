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
    return (
      <div>
        <div className="trainDetail_head">
          <Row type="flex" justify="center" align="middle">
            <Col span={8}>
              <div className="start-train">
                <p>北京站</p>
                <span>23:20</span>
                <small>始发站</small>
              </div>
            </Col>
            <Col span={8}>
              <div className="train-info">
                <p>K101 快速</p>
                <img src={train_arrow} alt=""/>
                <small>30小时30分</small>
              </div>
            </Col>
            <Col span={8}>
              <div className="end-train">
                <p>温州站</p>
                <span>终到站</span>
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

