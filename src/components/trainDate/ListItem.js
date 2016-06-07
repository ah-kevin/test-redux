/**
 * Created by dg_lennon on 16/6/7.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {Row,Col} from 'antd';

import {immutableRenderDecorator} from 'react-immutable-render-mixin';
@immutableRenderDecorator
class ListItem extends Component {
  render () {
    const {one,two,one_text,two_text,img}=this.props;
    const oneChild=img?<img src={img} />:one_text;
    return (
        <Row type="flex" justify="center" align="middle">
          <Col span={one}>
            {oneChild}
          </Col>
          <Col span={two}>
            {two_text}
          </Col>
        </Row>
    );
  }
}

ListItem.propTypes = {};
ListItem.defaultProps = {};

export default ListItem;
