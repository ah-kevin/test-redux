/**
 * Created by dg_lennon on 16/6/4.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import TrainTile from './tarinTtile';
import {Row,Col} from 'antd';
let train_trans=require('../../images/train_trans.png');
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
@immutableRenderDecorator
class TrainStation extends Component {
  constructor (){
    super();
  }
  render () {
    const {selectStation,actions} =this.props;
    return (
      <div className="trainStation">
        <Row type="flex" justify="center" align="middle">
          <TrainTile title="站到站查询"></TrainTile>
          <Col span={23} className='content'>
            <div className="select" >
              <Row type="flex" justify="center" align="middle" >
                <Col span={10}>
                  <small>出发地</small>
                  <span>
                    {selectStation.get('start')}
                  </span>
                  <div className="border-bottom">
                    <span className="before"></span>
                    <span className="after"></span>
                  </div>
                </Col>
                <Col span={3}>
                    <img src={train_trans} alt="" className={selectStation.get('isreverse')?'rotateY':''} onTouchTap={actions.reverse_station}/>
                </Col>
                <Col span={10}>
                  <small>目的地</small>
                  <span>
                    {selectStation.get('end')}
                  </span>
                  <div className="border-bottom">
                    <span className="before"></span>
                    <span className="after"></span>
                  </div>
                </Col>
              </Row>
            </div>
              <button onTouchTap={()=>actions.s2ssearch(selectStation.get('start'),selectStation.get('end'))}>查询车次</button>
          </Col>
        </Row>
      </div>
    );
  }
}

TrainStation.propTypes = {};
TrainStation.defaultProps = {};

export default TrainStation;

