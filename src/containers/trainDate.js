import React, {
  Component,
  PropTypes
} from 'react';
import Header from '../components/Header'
import {connect} from 'react-redux';
import {changeRoute} from '../actions/route';
class trainDate extends Component {
  
  componentWillMount () {
    this.props.dispatch(changeRoute('列车时刻表'))
  }
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
