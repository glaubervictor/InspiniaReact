import React, { Component } from 'react'
import Progress from './progress'
import Navigation from './navigation'
import TopHeader from './topHeader'
import Footer from './footer'
import { correctHeight, detectBody } from './helpers/helpers'

import './assets/dependencies'

import Routes from '../routes/routes'

export default class Main extends Component {

    componentDidMount() {

        $(window).bind("load resize", function () {
            correctHeight();
            detectBody();
        });
    }

    render() {
        return (
            <div id="wrapper">
                <Progress />
                <Navigation />
                <div id="page-wrapper" className="gray-bg">
                    <TopHeader />
                    <Routes />
                    <Footer />
                </div>
            </div>
        )
    }
}