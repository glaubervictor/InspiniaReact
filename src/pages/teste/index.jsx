import React, { Component } from 'react'
import { DatePicker, Input, Select, Upload, Button, Icon } from 'antd'

import 'antd/dist/antd.less'

export default class Index extends Component {
    
    render() {
        return (
            <div className="wrapper wrapper-content animated bounceIn">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center m-t-lg">
                            <h1>
                                Página teste
                            </h1>
                            <small>
                                Exemplo de página teste.
                            </small>
                            <div className="row">
                                <div className="col-md-2">
                                    <DatePicker format="DD/MM/YYYY" />
                                </div>
                                <div className="col-md-2">
                                    <Input />
                                </div>
                                <div className="col-md-2">
                                    <Select
                                        style={{ width: 100 + '%' }}
                                        showSearch>
                                        <Option value="teste">Teste</Option>
                                        <Option value="teste1">Teste1</Option>
                                        <Option value="teste2">Teste2</Option>
                                    </Select>
                                </div>
                                <div className="col-md-2">
                                    <Upload>
                                        <Button>
                                            <Icon type="upload" /> Efetuar upload
                                        </Button>
                                    </Upload>
                                </div>
                            </div>
                            <div className="row">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}