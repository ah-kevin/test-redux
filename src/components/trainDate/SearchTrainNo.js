/**
 * Created by dg_lennon on 16/6/4.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import {Row, Col,message} from 'antd';
import TrainTile from './tarinTtile';
@immutableRenderDecorator
class SearchTrainNo extends Component {
  constructor () {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (e) {
    this.props.changeTrainNo(e.target.value);
  }
  render () {
    const { gettraindetail, trainDetail,trainNo}=this.props;
    return (
      <div className="SearchTrainNo">
        <Row type="flex" justify="center" align="middle">
          <TrainTile title="车次查询"></TrainTile>
          <Col span={23} className='content'>
            <input type="text" value={trainNo.get('trainNo')} onChange={this.handleChange} placeholder="请输入您要查询的车次如K101"/>
            <div className="border-bottom">
              <span className="before"></span>
              <span className="after"></span>
              <button onTouchTap={()=>trainNo.get('trainNo') == '' ?message.warning('车次不能为空',1.5) : gettraindetail(trainNo.get('trainNo'))}>
                查询车次
              </button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

SearchTrainNo.propTypes = {};
SearchTrainNo.defaultProps = {};

export default SearchTrainNo;

