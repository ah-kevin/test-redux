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
    const {items} =this.props;
    let TimelineNodes=items.map((item,index)=>
      <Timeline.Item>
        <Row type="flex" justify="center" align="midlle">
          <Col span={7}>{item.get(0)}</Col>
           <Col span={5}>{item.get(1)}</Col>
           <Col span={7}>{item.get(2)}</Col>
          <Col span={5}>{item.get(3)}</Col>
        </Row>
      </Timeline.Item>
    )
    return (
      <div>
        <Timeline>
          {TimelineNodes}
        </Timeline>
      </div>
    );
  }
}

trainItem.propTypes = {};
trainItem.defaultProps = {};

export default trainItem;

