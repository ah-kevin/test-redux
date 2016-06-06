import React, {
  Component,
  PropTypes
} from 'react';
import {connect} from 'react-redux';
import SearchTrainNo from '../components/trainDate/SearchTrainNo';
import TrainStation from '../components/trainDate/TrainStation';
import * as actions from '../actions/trainDate';
import {bindActionCreators} from 'redux';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
@immutableRenderDecorator
class trainDateHome extends Component {
  render () {
    const { trainDate,actions } =this.props;
    return (
      <div>
        <SearchTrainNo trainDetail={trainDate.get('traindetail')} trainNo={trainDate.get('trainNo')} gettraindetail={actions.gettraindetail} changeTrainNo={actions.changeTrainNo}/>
        <TrainStation selectStation={trainDate.get('selectStation')} actions={actions}/>
      </div>
    );
  }
}

trainDateHome.propTypes = {};
trainDateHome.defaultProps = {};

export default connect(
  state=>({
    trainDate: state.get('trainDate')
  }),
  dispatch=>({
    actions: bindActionCreators(actions, dispatch)
  })
)(trainDateHome);
