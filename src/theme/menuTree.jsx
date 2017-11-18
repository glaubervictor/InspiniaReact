import React from 'react'

export default props => (
    <li>
        <a href="#">
            <i className={`fa fa-${props.icon}`}></i> 
            <span className="nav-label">{props.label}</span>
            <span className="fa arrow"></span>
        </a>
        <ul className="nav nav-second-level">
            {props.children}
        </ul>
    </li>
)