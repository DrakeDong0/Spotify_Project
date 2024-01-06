import React from 'react';
import "./Panel.css";

export default function Panel(){
    return(
        <>
        <div className="Left-Panel">
            <div className="Left-Top-Container">
                <h1>Top</h1>
            </div>
            <div className="Left-Bot-Container">
                <h1>Bot</h1>
            </div>
        </div>
        <div className="Right-Panel"></div>
        </>
    );
}