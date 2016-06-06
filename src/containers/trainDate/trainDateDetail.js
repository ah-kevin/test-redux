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
    const { extInfo, head, value } =this.props;
    const headeValue=immutable.fromJS({
      start:value.getIn([0,1]),
      end:value.getIn([-1,1]),
      startTime:value.getIn([0,4]),
      endTime:value.getIn([-1,4]),
      totalTime:extInfo.get('totalTime')
    })
    console.log(headeValue.toJS());
    return (
      <div>
          <Header extInfo={extInfo} />
          <TrainList/>
      </div>
    );
  }
}

trainDateDetail.propTypes = {};
trainDateDetail.defaultProps = {};

export default connect(
  state=>({
    extInfo: state.getIn([ 'trainDate', 'traindetail', 'data', 'extInfo' ]),
    head: state.getIn([ 'trainDate', 'traindetail', 'data', 'info', 'head' ]),
    value: state.getIn([ 'trainDate', 'traindetail', 'data', 'info', 'value' ])
  })
)(trainDateDetail);
