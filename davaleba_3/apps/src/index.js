import React from "react";
import ReactDOM from "react-dom/client"
import ToggleTextApp from "./components/ToggleText";
import "./index.css"
import ColorPickerApp from "./components/ColorPicker";
import PasswrodVissibillityApp from "./components/PasswordVisibillity"; 
import DoubleCounterApp from "./components/DoubleCounter";



const App = () => {
    return (
        <div>
            <DoubleCounterApp />
        </div>
    )
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
