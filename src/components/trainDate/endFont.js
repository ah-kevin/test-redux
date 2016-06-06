import React, {
  Component,
  PropTypes
} from 'react';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
@immutableRenderDecorator
class endFont extends Component {
  render () {
    return (
      <div className="out" style={{
        backgroundColor:this.props.color,
        borderColor:this.props.color
      }}>
        <div className="in">{this.props.value}</div>
      </div>
    );
  }
}

endFont.propTypes = {};
endFont.defaultProps = {};

export default endFont;
