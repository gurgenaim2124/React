import React, {useState} from "react";

function CelsiusToFahrenheit () {

    const [celsius, setCelsius] = useState('')
    const [fahrenheit, setFahrenheit] = useState(null)


    const converTemp = () => {
        if (celsius !== " ") {
            const result = (parseFloat(celsius) * 9) / 5 + 32;
            setFahrenheit(result)
        } 
    }

    return(
        <div>
            <input
                type="number"
                placeholder="Enter Celsius"
                value={celsius}
                onChange={(e) => setCelsius(e.target.value)}
            />
            <button onClick={converTemp}>Submit</button>
            {fahrenheit !== null && (
                <p>result: {fahrenheit}°F</p>
            )}
        </div>
    )
}

export default CelsiusToFahrenheit