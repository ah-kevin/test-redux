import React, {
  Component,
  PropTypes
} from 'react';
import {connect} from 'react-redux';
import SearchTrainNo from '../components/trainDate/SearchTrainNo';
import TrainStation from '../components/trainDate/TrainStation';
import * as trainDateActions from '../actions/trainDate';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';

import {immutableRenderDecorator} from 'react-immutable-render-mixin';
@immutableRenderDecorator
class trainDateHome extends Component {
  componentWillMount () {
    // console.log('home 渲染了');
    this.props.actions.changeRoute('列车时刻表');
  }

  render () {
    const { trainDate,trainDateActions } =this.props;
    return (
      <div>
        <SearchTrainNo trainDetail={trainDate.get('traindetail')} trainNo={trainDate.get('trainNo')} gettraindetail={trainDateActions.gettraindetail} changeTrainNo={trainDateActions.changeTrainNo}/>
        <TrainStation selectStation={trainDate.get('selectStation')} actions={trainDateActions}/>
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
    trainDateActions: bindActionCreators(trainDateActions, dispatch),
    actions:bindActionCreators(actions,dispatch)
  })
)(trainDateHome);
