import React, {
  Component,
  PropTypes
} from 'react';
import Header from '../components/Header'
import {connect} from 'react-redux';
import SearchTrainNo from '../components/trainDate/SearchTrainNo';
import TrainStation from '../components/trainDate/TrainStation';
import * as actions from '../actions/trainDate';
import {bindActionCreators} from 'redux';

class trainDate extends Component {
  render () {
    const { router } =this.context;
    const { selectStation } =this.props
    return (
      <div className="trainDate">
        <Header />
        <SearchTrainNo />
        <TrainStation selectStaion={selectStation}/>
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
    selectStation: state.get('trainDate')
  }),
  dispatch=>({
    actions: bindActionCreators(actions, dispatch)
  })
)(trainDate);
