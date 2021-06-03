import React, { useState } from "react";
import './Step1.css';

type Props = {
    prev: any
    next: any
}

const Step1: React.FC<Props> = (props) => {
  return (
    <div className="s1Div">
        <h1 className="title">Urban Jungle</h1>
        <button onClick={props.next} className="btn">Start</button>
    </div>
  );
}

export default Step1;