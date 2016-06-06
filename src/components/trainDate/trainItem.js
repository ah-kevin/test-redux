/**
 * Created by dg_lennon on 16/6/6.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {Timeline,Row,Col,Icon} from 'antd';
import EndFont from './endFont';

import {immutableRenderDecorator} from 'react-immutable-render-mixin';
@immutableRenderDecorator
class trainItem extends Component {
  render () {
    const {items} =this.props;
    let itemslength=items.size;
    let TimelineNodes=items.map((item,index)=>
      <Timeline.Item key={index} color="green"
                     dot={index==0?<EndFont value="始" color="#f9aa05"/>:<EndFont value=""/>&&
                     index==itemslength-1?<EndFont value="终" color="#39b3e6"/>:<EndFont value=""/>}
      >
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

