import React, {
  Component,
  PropTypes
} from 'react';
import Header from '../components/Header'
import {connect} from 'react-redux';
import SearchTrainNo from '../components/trainDate/SearchTrainNo';
import TrainStation from '../components/trainDate/TrainStation';

class trainDate extends Component {
  render () {
    const { router } =this.context;
    return (
      <div className="trainDate">
        <Header />
        <SearchTrainNo />
        <TrainStation/>
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
