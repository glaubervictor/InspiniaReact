import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu

import { smoothlyMenu } from './helpers/helpers'

class Navigation extends Component {

    componentWillUpdate(nextProps, nextState) {
        $("body").toggleClass("mini-navbar")
        smoothlyMenu()
    }

    handleClick(e) {
        debugger
        console.log('click', e);
    }

    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav" id="side-menu" ref="menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element">
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                    <span className="clear">
                                        <span className="block m-t-xs">
                                            <strong className="font-bold">Usuário</strong>
                                        </span>
                                        <span className="text-muted text-xs block">
                                            Administrador <b className="caret"></b>
                                        </span>
                                    </span>
                                </a>
                                <ul className="dropdown-menu m-t-xs">
                                    <li>
                                        <a href="#">Sair</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="logo-element">
                                IR
                            </div>
                        </li>
                        {/* menu */}
                        <Menu
                            inlineCollapsed={this.props.menu.collapsed}
                            onClick={this.handleClick}
                            mode="inline"
                            theme="dark"
                            style={{ width: "100%" }}>
                            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                                <Menu.Item key="1">Option 1</Menu.Item>
                                <Menu.Item key="2">Option 2</Menu.Item>
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <SubMenu key="sub3" title="Submenu">
                                    <Menu.Item key="7">Option 7</Menu.Item>
                                    <Menu.Item key="8">Option 8</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({ menu: state.menu })
export default connect(mapStateToProps, null)(Navigation)