import React, { Component } from 'react';
import Layout from "./Layout";
import RegistrationPage from "./RegistrationPage";
import InfoPage from "./GoodInfoPage"
import MyGaragePage from "./MyGaragePge"
import AboutUsPage from "./AboutUsPage"
import ContactUs from "./ContactUs";
import SupportPage from "./SupportPage";

// import { BrowserRouter, Route } from "react-router-dom";
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import "../src/Images/FontsAndResorces/css/fontello.css"

class App extends Component {
  componentDidMount() {
  }
  render() {
    return (

      < BrowserRouter basename="/" >
        <Switch>
          <Route path="/" component={Layout} exact />
          <Route path="/Register" component={RegistrationPage} />
          <Route path="/Info" component={InfoPage} />
          <Route path="/MyGarage" component={MyGaragePage} />
          <Route path="/AboutUs" component={AboutUsPage} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/SupportPage" component={SupportPage} />
        </Switch>
      </BrowserRouter >
      // <Layout />
    );
  }
}

export default App;
