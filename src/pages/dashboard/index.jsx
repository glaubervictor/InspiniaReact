import React, { Component } from 'react'
import { Link } from 'react-router'

import Header from '../../theme/header'
import Content from '../../theme/content'

export default class Index extends Component {

    render() {
        return (
            <div>
                <Header title="Dashboard">
                    <Link to="/home" className="btn btn-warning btn-sm">Voltar</Link>
                </Header>
                <Content>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center m-t-lg">
                                <h1>
                                    Página dashboard
                                </h1>
                                <small>
                                    Exemplo da página dashboard.
                                </small>
                            </div>
                        </div>
                    </div>
                </Content>
            </div>
        )
    }
}