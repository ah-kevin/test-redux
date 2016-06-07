/**
 * Created by dg_lennon on 16/6/7.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
@immutableRenderDecorator
class trainList extends Component {
  render () {
    return (
      <div>
        List
      </div>
    );
  }
}

trainList.propTypes = {};
trainList.defaultProps = {};

export default trainList;

