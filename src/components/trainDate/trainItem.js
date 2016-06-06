/**
 * Created by dg_lennon on 16/6/6.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {Timeline, Icon,Row,Col } from 'antd';

import {immutableRenderDecorator} from 'react-immutable-render-mixin';
@immutableRenderDecorator
class trainItem extends Component {
  render () {
    return (
      <div>
        <Timeline>
          <Timeline.Item>
            <Row type="flex" justify="center" align="midlle">
              <Col span={7}>北京</Col>
              <Col span={5}>起点站</Col>
              <Col span={7}>23:20</Col>
              <Col span={5}>19分支</Col>
            </Row>
          </Timeline.Item>
          <Timeline.Item>
            <Row type="flex" justify="center" align="midlle">
              <Col span={7}>北京</Col>
              <Col span={5}>起点站</Col>
              <Col span={7}>23:20</Col>
              <Col span={5}>19分支</Col>
            </Row>
          </Timeline.Item>
          <Timeline.Item>
            <Row type="flex" justify="center" align="midlle">
              <Col span={7}>北京</Col>
              <Col span={5}>起点站</Col>
              <Col span={7}>23:20</Col>
              <Col span={5}>19分支</Col>
            </Row>
          </Timeline.Item>
        </Timeline>
      </div>
    );
  }
}

trainItem.propTypes = {};
trainItem.defaultProps = {};

export default trainItem;

