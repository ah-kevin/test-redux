import React, {
  Component,
  PropTypes
} from 'react';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
@immutableRenderDecorator
class trainDateDetail extends Component {
  render () {
    return (
      <div>
        detail
      </div>
    );
  }
}

trainDateDetail.propTypes = {};
trainDateDetail.defaultProps = {};

export default trainDateDetail;
