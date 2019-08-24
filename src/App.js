import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import logo from "./img/logo.png";

import "@ui5/webcomponents/dist/Button"; // loads ui5-button
import "@ui5/webcomponents/dist/ShellBar";
import "@ui5/webcomponents/dist/Card";
import "@ui5/webcomponents/dist/Title";
import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/List";
import "@ui5/webcomponents/dist/CustomListItem";
import "@ui5/webcomponents/dist/StandardListItem";
import Home from "./home/Home";
import Detail from './detail/Detail';

function App() {
  return (
		<div className="App">
			<ui5-shellbar
				primary-title="Global Unicorn List"
				show-notifications
				show-product-switch
				show-co-pilot
				logo={logo}>
			</ui5-shellbar>

			<Switch>
				<Route path='/home' component={Home}/>
				<Route path='/detail' component={Detail}/>
				<Redirect from="/" to="/home" />
			</Switch>
		</div>
	);
}

export default App;
