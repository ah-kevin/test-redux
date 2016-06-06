import React, {
  Component,
  PropTypes
} from 'react';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
@immutableRenderDecorator
class endFont extends Component {
  render () {
    return (
      <div>
          <div className="out" >
            <div className="in" style={{
              backgroundColor:this.props.color,
              borderColor:this.props.color
            }}>{this.props.value}</div>
          </div>
        <div className="line"></div>
      </div>

    );
  }
}

endFont.propTypes = {};
endFont.defaultProps = {};

export default endFont;
