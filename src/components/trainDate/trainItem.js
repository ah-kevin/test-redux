/**
 * Created by dg_lennon on 16/6/6.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {Row,Col,Icon} from 'antd';
import Font from './Font';

import {immutableRenderDecorator} from 'react-immutable-render-mixin';
@immutableRenderDecorator
class trainItem extends Component {
  findIndexOfKey(map, key) {
    let index = -1;
      for (let k of map.keys()) {
        index += 1;
        if (map.getIn([k,0]).indexOf(key)!==-1) {
          break
        }
      }
     return index;
  }
  render () {
    const {items,start,end} =this.props;
    let itemslength=items.size;
    let startIndex=this.findIndexOfKey(items,start);
    let endIndex=this.findIndexOfKey(items,end);
    console.log(startIndex,endIndex);
    let TimelineNodes=items.map((item,index)=>
        <Row type="flex" justify="center" align="middle" key={index}
             className={startIndex==0||startIndex<=index?endIndex==0||index<=endIndex?'':'pass':'pass'} >
          <Col span={2}>
           {
             index==startIndex?<Font value={startIndex!==0?"过":"终"} color="#f9aa05"/>:<Font value="" color="#97e0a1"/>&&
            index==endIndex?<Font value={endIndex!==itemslength?"过":"终"} color="#39b3e6"/>:<Font value=""  color="#97e0a1"/>}
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

