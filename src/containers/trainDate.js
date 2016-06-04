import React, {
  Component,
  PropTypes
} from 'react';
import Header from '../components/Header'
import {connect} from 'react-redux';

class trainDate extends Component {
  render () {
    const { router } =this.context;
    return (
      <div>
        <Header />
        <h1 onClick={()=>router.push('404')}>123</h1>
      </div>
    );
  }
}

trainDate.propTypes = {};
trainDate.defaultProps = {};
trainDate.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default connect()(trainDate);
