import React, {
  Component,
  PropTypes
} from 'react';
import {Link} from 'react-router';
import {Row, Col, Icon} from 'antd';

class Header extends Component {
  render () {
    return (
      <header>
        <div>
          <Row type="flex" justify="center" algin="middle">
            <Col span={24} justify="center">
              <div  className="title">
                <Link to='/'>
                  <Icon type="left" className="arrow"/>
                </Link>
                <span>{this.props.title}</span>
              </div>
            </Col>
          </Row>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
};
Header.defaultProps = {
};

export default Header;
