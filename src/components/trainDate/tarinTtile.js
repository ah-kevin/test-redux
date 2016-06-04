/**
 * Created by dg_lennon on 16/6/4.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {Col} from 'antd';
let trainCar =require('../../images/train_car.png');
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
@immutableRenderDecorator
class tarinTtile extends Component {
  render () {
    return (
        <Col span={23} className='head'>
          <p>{this.props.title}</p>
          <img src={trainCar} alt=""/>
        </Col>
    );
  }
}

tarinTtile.propTypes = {};
tarinTtile.defaultProps = {};

export default tarinTtile;
