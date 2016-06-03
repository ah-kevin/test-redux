import React, {
  Component,
  PropTypes
} from 'react';
import { Link } from 'react-router';
import {Row,Col} from 'antd';

class Header extends Component {
  render () {
    return (
      <header className="clearfix">
        <div>
          <Row>
            <Col span={24}>col-24</Col>
          </Row>
        </div>
  {/*      <nav className="clearfix">
          <div className="nav-item">
            <Link to="Home">Home</Link>
          </div>
          <div className="nav-item">
            <Link to="Info">Info</Link>
          </div>
        </nav>*/}
      </header>
    );
  }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
