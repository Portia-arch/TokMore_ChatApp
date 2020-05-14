import React, { Fragment } from "react";
import Layout from "./Components/Layout";
import "./index.css";

class App extends React.Component {
  render() {
    
    return (
      <Fragment>
      <Layout />
      </Fragment>
    );
  }

}
App.defaultProps = {
};

export default App;
