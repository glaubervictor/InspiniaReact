import React from 'react'
import { Select } from '@blueprintjs/labs'

import 'modules/@blueprintjs/core/dist/blueprint.css'


export const FormInput = ({ input, col, label, required, meta: { touched, error } }) => (
    <div className={`col-md-${col}`}>
        <div className="form-group">
            <label className="control-label">{label} <span className="text-danger">{required ? '*' : ''}</span></label>
            <input {...input} type="text" className="form-control" />
            <small className="help-block">
                {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span className="text-warning">{warning}</span>))}
            </small>
        </div>
    </div>
)