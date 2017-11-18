import React, { Component } from 'react'
import pace from '../theme/assets/js/pace/pace'

export default class Progress extends Component {
    componentDidMount(){
        pace.start();
    }
    render() {
        return (null)
    }
}