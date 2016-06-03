import React, {
  Component,
  PropTypes
} from 'react';
import Header from '../components/Header'
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import {routerActions} from 'react-router-redux';


import {connect} from 'react-redux';
class trainDate extends Component {
  handleClick () {
    // const {history}=this.props;
    // history.goBack();
  }

  render () {
    // const {history} =this.props;
    return (
      <div>
        <Header  />
        <h1>123</h1>
      </div>
    );
  }
}

trainDate.propTypes = {};
trainDate.defaultProps = {};

export default connect(
  (state)=>({
    state:state.items
  })
)(trainDate);
