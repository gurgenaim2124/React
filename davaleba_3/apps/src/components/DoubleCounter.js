import React, {useState, useEffect} from "react";


function DoubleCounterApp () {
    const [count, setCount] = useState(0)
    const [double, setDouble] = useState(0)


    useEffect(() => {
        setDouble(count * 2)
    }, [count])


    return (
        <div>
            <p> Count: {count}</p>
            <p>Double: {double}</p>
            <button onClick={() => setCount(count + 1)}>click</button>


        </div>
    )

}

export default DoubleCounterApp