import React from "react";
import ReactDOM from "react-dom/client"
import PasswordStrengthChecker from "./components/PasswordStrengthChecker";
import CelsiusToFahrenheit from "./components/CelsiusToFahrenheit";
import DocumentTitle from "./components/DocumentTitle";


const App = () => {
    return(
        <div>
            <DocumentTitle />
        </div>
    )
} 

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)