import React from 'react'

export default props => (
    <li>
        <a href={props.path}>
            {
                props.icon &&
                <i className={`fa fa-${props.icon}`}></i> 
            }
            <span className="nav-label">{props.label}</span>
        </a>
    </li>
)