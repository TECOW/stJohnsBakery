import React, {Component} from "react";
import Header from "./Header";
import "./App.css";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Menu from "./Menu";
import OrderOnline from "./OrderOnline";
import Footer from "./Footer";

function App() {
  return (
    <div className="appBody">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />
        <Route path="/order" component={OrderOnline} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
