import React, {
  Component,
  PropTypes
} from 'react';
import {connect} from 'react-redux';

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

export default connect(
)(trainDateDetail);
