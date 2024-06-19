import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText]= useState("Enter text here");

    const toUpper = ()=>{
        setText(text.toUpperCase());
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    return (
        <><h1>{props.heading}</h1><div>
            <div class="mb-3">
                <textarea class="form-control" id="myBox" rows="7" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={toUpper}>Convert to Uppercase</button>
        </div></>
    )
}
