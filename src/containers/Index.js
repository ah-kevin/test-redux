/**
 * Created by dg_lennon on 16/5/31.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router';
class Home extends Component {
  render () {
    let styles = {
      h1: {
        height: '100px',
        fontSize:'30px',
        lineHeight:'100px',
        textAlign:'center '
      }
    };
    return (
      <Menu mode='vertical'>
        <Menu.Item key='mail'>
          <Link to='trainDate'>
            <h1 style={styles.h1}>列车时刻表</h1>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
