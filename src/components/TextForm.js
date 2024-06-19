import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");

    const toUpper = () => {
        setText(text.toUpperCase());
    }

    const toLower = () => {
        setText(text.toLowerCase());
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <div style={{color : props.mode==='dark'?"white": '#2b3035'}}>
            <div className="container my-3" >
                <h1>{props.heading}</h1>
                <div>
                    <div className="mb-3">
                        <textarea className="form-control" id="myBox" rows="7" value={text} style={{backgroundColor : props.mode==='dark'?"#2b3035": 'white', color: props.mode==='dark'?"white": '#2b3035'}} onChange={handleOnChange}></textarea>
                    </div>
                    <button className="btn btn-primary mx-1" onClick={toUpper}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={toLower}>Convert to Lowercase</button>
                </div>
            </div>
            <div className="container my-3">
                <h1>Your text summary </h1>
                <p>{text.length} characters and {text.split(" ").length} number of words</p>
                <p>Time to read : {0.08 * text.split(" ").length} minutes</p>
                <h1>Preview</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}
