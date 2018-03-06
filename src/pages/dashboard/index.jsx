import React, { Component } from 'react'
import { Link } from 'react-router'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../../theme/header'
import Content from '../../theme/content'

import { minhaFuncao } from '../../actions/testeActions'

class Index extends Component {

    componentWillMount() {
        this.props.minhaFuncao()
    }

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
                                    { this.props.teste.meuCep.logradouro }
                                </small>
                            </div>
                        </div>
                    </div>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ teste: state.teste })
const mapDispatchToProps = dispatch => bindActionCreators({ 
    minhaFuncao }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)