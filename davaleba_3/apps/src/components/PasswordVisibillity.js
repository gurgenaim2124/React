import React, { useEffect, useState } from "react";

function PasswrodVissibillityApp () {
    
    const [isVisible, setIsVisible] = useState(false);
    const [password, setPassword] = useState('');

    
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <input
                    type={isVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                />

                <button onClick={toggleVisibility}>{isVisible ? "Hide" : "Show"}
                </button>
            </div>
        </div>
    );
}

export default PasswrodVissibillityApp