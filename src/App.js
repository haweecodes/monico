import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Team from './pages/Team'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <Navigation></Navigation>
                    <div className="Container">
                        <Route exact  path="/" component={Home}></Route>
                        <Route path="/team" component={Team}></Route>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
