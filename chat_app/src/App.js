import React, { Fragment } from 'react';
import Login from './components/Layout/login';
import Header from './header';

require('./styles/App.css');



class App extends React.Component {
  render() {
    
    return (
      <Fragment>
      
      <Header />
      <Login />
      </Fragment>
    );
  }

}
App.defaultProps = {
};

export default App;
