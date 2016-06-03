require('styles/App.scss');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
        <div>
          <div className="main">
            {this.props.children}
          </div>
        </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
