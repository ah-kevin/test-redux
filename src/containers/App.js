
import React from 'react';
require('styles/App.scss');

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
