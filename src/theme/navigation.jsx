import React, { Component } from 'react'
import { hashHistory } from 'react-router'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default class Navigation extends Component {

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav metismenu" id="side-menu" ref="menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element">
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">Usuário</strong>
                                </span> <span className="text-muted text-xs block">Administrador <b className="caret"></b></span> </span> </a>
                                <ul className="dropdown-menu m-t-xs">
                                    <li><a href="#">Sair</a></li>
                                </ul>
                            </div>
                            <div className="logo-element">
                                IR
                            </div>
                        </li>
                        {/* menu */}
                        <MenuItem path="#/dashboard" icon="th-large" label="Dashboard" />
                        <MenuTree icon="th-large" label="Teste">
                            <MenuItem path="#/teste" label="Teste" />
                        </MenuTree>
                    </ul>
                )
                </div>
            </nav>
        )
    }
}