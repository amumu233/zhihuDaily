import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import './reset.css'

import Index from './Index/index'
import Theme from './Theme'
import Article from './Article'


class IndexApp extends Component {
    componentWillMount(){
        
    }
    render(){
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={ Index }></Route>
                        <Route path="/theme/:id" component={ Theme }></Route>
                        <Route path="/article/:id" component={ Article }> </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default IndexApp