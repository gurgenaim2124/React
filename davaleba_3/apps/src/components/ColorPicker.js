import React, {useState} from "react";


function ColorPickerApp () {

    const [color, setColor] = useState('')


    return (
            <div
                style= {
                    {
                        borderRadius: "10px",
                        backgroundColor: color,
                        width: "250px",
                        border: "1px solid black",
                        padding: "20px",
                    }
                }>

                <input
                type="text"
                value={color}
                placeholder="Enter Red or Blue"
                onChange={(e) => {setColor(e.target.value)}}
            />
            </div>
    )


}


export default ColorPickerApp