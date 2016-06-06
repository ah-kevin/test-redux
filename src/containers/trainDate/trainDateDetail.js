import React, {
  Component,
  PropTypes
} from 'react';
import {connect} from 'react-redux';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import Header from '../../components/trainDate/trainDetailHead';
import TrainList from '../../components/trainDate/trainList';

@immutableRenderDecorator
class trainDateDetail extends Component {
  render () {
    const {header,trainNo,items} =this.props
    return (
      <div>
          <Header  state={header}  trainNo={trainNo}/>
          <TrainList items={items}/>
      </div>
    );
  }
}

trainDateDetail.propTypes = {};
trainDateDetail.defaultProps = {};

export default connect(
  state=>({
    header: state.getIn([ 'trainDate', 'traindetail', 'data', 'header']),
    trainNo:state.getIn(['trainDate','trainNo','trainNo']),
    items:state.getIn([ 'trainDate', 'traindetail', 'data', 'items'])
  })
)(trainDateDetail);
