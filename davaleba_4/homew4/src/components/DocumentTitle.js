import React, {useState, useEffect} from "react";


function DocumentTitle () {

    const [title, setTitle] = useState('')


    useEffect(()=>{
        if (title.trim() === "") {
            document.title = "React app"
        }else {
            document.title = title
        }
    }, [title])


    return (
        <div>
            <input
                type="text"
                value={title}
                placeholder="Enter some text"
                onChange={(e) => setTitle(e.target.value)}
            />

            <p>current title: {title}</p>
        </div>
    )
}
export  default DocumentTitle