/**
 * Created by dg_lennon on 16/6/6.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {Row, Col} from 'antd';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import Item from './trainItem';

@immutableRenderDecorator
class trainList extends Component {
  render () {
    return (
      <div className="trainList">
        <div className="head">
          <Row type="flex" justify="center" align="middle">
            <Col span={2}/>
            <Col span={5}>站名</Col>
            <Col span={6}>到达时间</Col>
            <Col span={6}>开车时间</Col>
            <Col span={4}>停留</Col>
            <Col span={1}/>
          </Row>
        </div>
        <Item items={this.props.items}/>
      </div>
    );
  }
}

trainList.propTypes = {};
trainList.defaultProps = {};

export default trainList;

