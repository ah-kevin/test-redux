import React, {
  Component,
  PropTypes
} from 'react';
import {Link} from 'react-router';
import {Row, Col, Icon} from 'antd';

class Header extends Component {
  shouldComponentUpdate (nextProps ) {
    return this.props.title !==nextProps.title
  }

  render () {
    const {router} =this.context
    // console.log('header重新渲染了');
    return (
      <header>
        <div>
          <Row type="flex" justify="center" algin="middle">
            <Col span={24} justify="center">
              <div  className="title">
                <a onClick={router.goBack}>
                  <Icon type="left" className="arrow"/>
                </a>
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
Header.contextTypes={
  router: React.PropTypes.object.isRequired
}
export default Header;
