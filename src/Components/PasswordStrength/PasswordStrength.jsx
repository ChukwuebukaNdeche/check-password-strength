import React, { useState } from "react"
import validator from "validator"

import styled from './PasswordStrength.module.css'
function PasswordStrength() {
    const [error, setError] = useState('')

    function checkPassword(event) {
        validate(event.target.value);
        function validate(value) {
            if (validator.isStrongPassword(value, {
                minLength: 8, minLowercase: 1,
                minUppercase: 1, minNumbers: 1,
                minSymbols: 1
            })) {
                setError('Strong Password')
            } else {
                setError('Not Strong Password')
            }
        }
    }

    return (
        <div className={styled.pcont}>
            <h2>Checking Password Strength</h2>
            <label htmlFor="password">Password</label>
            <input type="text" onChange={checkPassword} />
            <p>{error === '' ? null : <span>{error}</span>}</p>
        </div>
    )
}
export default PasswordStrength
