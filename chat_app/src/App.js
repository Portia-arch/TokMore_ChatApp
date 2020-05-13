import React, { Fragment } from "react";
import Layout from "./Components/Layout";
import "./index.css";
// import Header from './header';

class App extends React.Component {
  render() {
    
    return (
      <Fragment>
      
      {/* <Header /> */}
      <Layout />
      </Fragment>
    );
  }

}
App.defaultProps = {
};

export default App;
