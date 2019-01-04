import React, { Component } from 'react'
import { Button, Modal } from 'antd'
import { Link } from 'react-router-dom'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../../theme/header'
import Content from '../../theme/content'

import { minhaFuncao, setaStatusDoBotao } from '../../actions/testeActions'

class Index extends Component {

    constructor(props){
        super(props)
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
                                <Button onClick={() => this.props.setaStatusDoBotao(true)}>Ok</Button>
                                <small>
                                    { this.props.teste.meuCep.logradouro }
                                </small>
                            </div>
                        </div>
                    </div>
                </Content>
                <Modal
                    title="Basic Modal"
                    visible={this.props.teste.meuBotao}
                    onOk={() => this.props.setaStatusDoBotao(false)}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({ teste: state.teste })
const mapDispatchToProps = dispatch => bindActionCreators({ 
    minhaFuncao, setaStatusDoBotao }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)