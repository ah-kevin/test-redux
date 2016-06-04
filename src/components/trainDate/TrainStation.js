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
    this.state={
      start:'合肥',
      end:'上海',
      select:false
    }
    this.handleSelect=this.handleSelect.bind(this);
  }
  handleSelect(){
    this.setState({
      start:this.state.end,
      end:this.state.start,
      select:!this.state.select
    });
  }
  render () {
    const {start,end,select} =this.state;
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
                    {start}
                  </span>
                  <div className="border-bottom">
                    <span className="before"></span>
                    <span className="after"></span>
                  </div>
                </Col>
                <Col span={3}>
                    <img src={train_trans} alt="" className={select?'rotateY':''} onTouchTap={this.handleSelect}/>
                </Col>
                <Col span={10}>
                  <small>目的地</small>
                  <span>
                    {end}
                  </span>
                  <div className="border-bottom">
                    <span className="before"></span>
                    <span className="after"></span>
                  </div>
                </Col>
              </Row>
            </div>
              <button>查询车次</button>
          </Col>
        </Row>
      </div>
    );
  }
}

TrainStation.propTypes = {};
TrainStation.defaultProps = {};

export default TrainStation;

