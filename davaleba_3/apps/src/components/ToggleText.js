import React, {useState} from "react";


function ToggleTextApp () {
    const [secretText, setSecretText] = useState(false)

    

    return (
        <div className="container">
            <h1>{secretText ? 'Hide Message' : 'Show Message'}</h1>
            {secretText ? <p>This is a secret text</p> : null}
            <button onClick={() => setSecretText(!secretText)}>Click</button>
        </div>
    )

} 





export default ToggleTextApp









