import React, { Component } from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import DashboardIndex from '../pages/dashboard/index'
import TesteIndex from '../pages/teste/index'


export default class Routes extends Component {
    render() {
        const { router, params, location, routes } = this.props
        return (
            <Router history={hashHistory}>
                <Route path='/' component={DashboardIndex} />
                <Route path='/teste' component={TesteIndex} />
                <Redirect from='*' to='/' />
            </Router>
        )
    }
}