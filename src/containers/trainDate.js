import React, {
  Component,
  PropTypes
} from 'react';
import Header from '../components/Header'
import {connect} from 'react-redux';
class trainDate extends Component {

  render () {
    const { router } =this.context;
    const {title}=this.props;
    return (
      <div className="trainDate">
        <Header title={title}/>
        {this.props.children}
      </div>
    );
  }
}

trainDate.propTypes = {};
trainDate.defaultProps = {};
trainDate.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default connect(
  state=>({
    title:state.getIn(['routing','title'])
  })
)(trainDate);
