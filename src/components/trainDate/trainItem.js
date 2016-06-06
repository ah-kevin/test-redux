/**
 * Created by dg_lennon on 16/6/6.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {Row,Col,Icon} from 'antd';
import EndFont from './endFont';

import {immutableRenderDecorator} from 'react-immutable-render-mixin';
@immutableRenderDecorator
class trainItem extends Component {
  render () {
    const {items} =this.props;
    let itemslength=items.size;
    let TimelineNodes=items.map((item,index)=>
        <Row type="flex" justify="center" align="middle" key={index} >
          <Col span={2}>
           {index==0?<EndFont value="始" color="#f9aa05"/>:<EndFont value="" color="#97e0a1"/>&&
            index==itemslength-1?<EndFont value="终" color="#39b3e6"/>:<EndFont value=""  color="#97e0a1"/>}
          </Col>
          <Col span={5}>{item.get(0)}</Col>
           <Col span={5}>{item.get(1)}</Col>
           <Col span={5}>{item.get(2)}</Col>
           <Col span={5}>{item.get(3)}</Col>
        </Row>
    )
    return (
      <div className="item">
          {TimelineNodes}
      </div>
    );
  }
}

trainItem.propTypes = {};
trainItem.defaultProps = {};

export default trainItem;

