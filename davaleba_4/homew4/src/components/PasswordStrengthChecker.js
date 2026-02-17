import React, {use, useState} from "react";

function PasswordStrengthChecker () {

    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    function checkStrength () {
        if (password.length < 6) {
            setMessage("Short password try again min: 6 character")
        }else {
            setMessage("Strong password ")
        }
    }
    return (
        <div>
            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={checkStrength}>Submit</button>
            {message && <p>{message}</p>}
        </div>
    )
}

export default PasswordStrengthChecker