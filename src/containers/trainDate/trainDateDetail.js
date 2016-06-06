import React, {
  Component,
  PropTypes
} from 'react';
import {connect} from 'react-redux';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import Header from '../../components/trainDate/trainDetailHead';
import TrainList from '../../components/trainDate/trainList';
import immutable from 'immutable';


@immutableRenderDecorator
class trainDateDetail extends Component {
  render () {
    const {header,trainNo} =this.props
    return (
      <div>
          <Header  state={header}  trainNo={trainNo}/>
          <TrainList/>
      </div>
    );
  }
}

trainDateDetail.propTypes = {};
trainDateDetail.defaultProps = {};

export default connect(
  state=>({
    header: state.getIn([ 'trainDate', 'traindetail', 'data', 'header']),
    trainNo:state.getIn(['trainDate','trainNo','trainNo'])
  })
)(trainDateDetail);
