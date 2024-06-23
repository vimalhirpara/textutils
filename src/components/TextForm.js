import React, { useState } from 'react'


export default function TextForm(props)
{
    const handleUpClick = () =>
    {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick = () =>
    {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () =>
    {
        setText("");
    }

    const handleOnChange = (event) =>
    {
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} placeholder="Enter text here" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary me-2" onClick={handleUpClick}>Upper case</button>
                <button type="button" className="btn btn-primary me-2" onClick={handleLowerClick}>Lower case</button>
                <div className="d-grid gap-2 mt-2">
                    <button type="button" className="btn btn-secondary" onClick={handleClearClick}>Clear</button>
                </div>
            </div>
            <div className="container my-4">
                <h4>Your text summary</h4>
                <div className="card">
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>{text.trim().length === 0 ? 0 : text.trim().split(" ").length} words and {text.length} characters.</p>
                            <footer className="blockquote-footer">
                                {text.trim().length === 0 ? 0 : 0.008 * text.trim().split(" ").length} Minutes read.
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
            {
                (text.trim().length === 0 ? 0 : text.trim().split(" ").length) > 0 ?
                    <div className="container my-4">
                        <h4>Preview</h4>
                        <div className="card">
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>{text}</p>
                                </blockquote>
                            </div>
                        </div>
                    </div> : ""
            }
        </>
    )
}
