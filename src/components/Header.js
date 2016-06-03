import React, {
  Component,
  PropTypes
} from 'react';
import {Link} from 'react-router';
import {Row, Col, Icon} from 'antd';

class Header extends Component {
  render () {
    let {history} =this.props;
    return (
      <header>
        <div>
          <Row type="flex" justify="center" algin="middle">
            <Col span={24} justify="center">
              <div  className="title">
                <Link to='/'>
                  <Icon type="left" className="arrow"/>
                </Link>
                <span>列车时刻表</span>
              </div>
            </Col>
          </Row>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  // history:PropTypes.object.isRequired
};
Header.defaultProps = {
};

export default Header;
