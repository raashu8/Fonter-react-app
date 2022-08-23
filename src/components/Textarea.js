import React from "react";
import { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("");

  const butnfunc = () => {
    let thenewtext = text.toUpperCase();
    setText(thenewtext);
  };
  const butnfuncmin = () => {
    let thenewtext = text.toLowerCase();
    setText(thenewtext);
  };
  const butnfuncclear = () => {
    let thenewtext = "";
    setText(thenewtext);
  };
  const onChangeevent = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div >
        <div className="container mt-3">
          <h1 style={{color: props.mode=== 'dark' ? 'white': 'black'}}>{props.heading}</h1>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label"
            ></label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              value={text}
              name="fullname"
              onChange={onChangeevent}
              style={{backgroundColor: props.mode=== 'dark' ? '#859db9': 'white',
              color: props.mode=== 'dark' ? 'white': 'black',
            border : props.mode=== 'dark' ? '1px solid black': '1px solid black'}}
            ></textarea>
          </div>
          <button className={`btn btn-${props.mode=== 'dark' ? 'warning': 'primary'} mx-2`} onClick={butnfunc}>
            Capitalize
          </button>
          <button className={`btn btn-${props.mode=== 'dark' ? 'warning': 'primary'} mx-2`} onClick={butnfuncmin}>
            Minimize
          </button>
          <button className={`btn btn-${props.mode=== 'dark' ? 'warning': 'primary'} mx-2`} onClick={butnfuncclear}>
            Clear text
          </button>
          {/* <button className="btn btn-primary mx-2" onClick={darkmode}>
           {titname}
          </button> */}
          {/* <button className="btn btn-primary mx-2" onClick={butnfuncundo}>UNDO </button>
        <button className="btn btn-primary mx-2" onClick={butnfuncredo}>REDO</button> */}
        </div>
      </div>
      <div className="container mt-4" style={{color: props.mode=== 'dark' ? 'white': 'black'}}>
        <h3>Your text summary is</h3>
        <p>
          {text.split(" ").length} Words and {text.length}{" "}
          Characters
        </p>
        <h4>Preview the text</h4>
        <p>{text.length === 0 ? "Enter something above to preview here" :text} </p>
      </div>
    </>
  );
}
