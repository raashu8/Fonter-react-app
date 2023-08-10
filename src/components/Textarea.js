import React from "react";
import { useState } from "react";
import { useSnackbar } from "notistack";

export default function Textarea(props) {
  const { enqueueSnackbar } = useSnackbar();
  const [text, setText] = useState("");
  const [cssMinify, setCssMinify] = useState({});
  const [value, setValue] = useState(false);

  const butnfunccap = (variant) => () => {
    let thenewtext = text.toUpperCase();
    setText(thenewtext);
    handleClickVariant();
    enqueueSnackbar("Text formatted to Upper case", { variant });
  };

  const butnfuncmin = (variant) => () => {
    let thenewtext = text.toLowerCase();
    setText(thenewtext);
    handleClickVariant();
    enqueueSnackbar("Text formatted to Lower case", { variant });
  };

  const onChangeevent = (event) => {
    setText(event.target.value);
  };

  const butnfuncclear = (variant) => () => {
    let thenewtext = "";
    setText(thenewtext);
    handleClickVariant();
    setCssMinify({});
    setValue(false);
    enqueueSnackbar("Text Cleared", { variant });
  };

  const handleClickVariant = (variant) => () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    handleClickVariant();
    enqueueSnackbar("Text copied sucessfully !!", { variant });
  };

  const handleCssModulation = (variant) => {
    const styles = {};
    const rules = text.split(";");
    rules.forEach((rule) => {
      const [property, value] = rule.split(":");
      if (property && value) {
        const propName = property.trim();
        const propValue = value.trim();
        const camelCasedPropName = propName.replace(
          /-([a-z])/g,
          (match, letter) => letter.toUpperCase()
        );
        styles[camelCasedPropName] = propValue;
      }
    });
    setCssMinify(styles);
    enqueueSnackbar("CSS minified", { variant });
  };

  return (
    <>
      <div>
        <div className="container mt-3">
          <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
            {props.heading}
          </h1>
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
              style={{
                backgroundColor: props.mode === "dark" ? "#859db9" : "white",
                color: props.mode === "dark" ? "white" : "black",
                border:
                  props.mode === "dark" ? "1px solid black" : "1px solid black",
              }}
            ></textarea>
          </div>
          <button
            className={`btn btn-${
              props.mode === "dark" ? "warning" : "primary"
            } mx-2 my-1`}
            disabled={text.length === 0}
            onClick={butnfunccap("success")}
          >
            Capitalize
          </button>
          <button
            className={`btn btn-${
              props.mode === "dark" ? "warning" : "primary"
            } mx-2 my-1`}
            disabled={text.length === 0}
            onClick={butnfuncmin("success")}
          >
            Minimize
          </button>
          <button
            className={`btn btn-${
              props.mode === "dark" ? "warning" : "primary"
            } mx-2 my-1`}
            disabled={text.length === 0}
            onClick={handleClickVariant("success")}
          >
            Copy text
          </button>
          <button
            className={`btn btn-${
              props.mode === "dark" ? "warning" : "primary"
            } mx-2 my-1`}
            disabled={text.length === 0}
            onClick={butnfuncclear("error")}
          >
            Clear text
          </button>
          <button
            className={`btn btn-${
              props.mode === "dark" ? "warning" : "primary"
            } mx-2 my-1`}
            disabled={text.length === 0}
            onClick={() => {
              handleCssModulation("success");
              setValue(true);
            }}
          >
            Minify CSS
          </button>
        </div>
      </div>
      <div
        className="container mt-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your text summary is</h3>
        <p>
          {
            text.split(/\s+/).filter((Element) => {
              return Element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters
        </p>
        <h4>Preview the text</h4>
        <div className="container">
          <p style={{ width: "100%" }}>
            {text.length === 0
              ? "Enter something above to preview here"
              : value
              ? JSON.stringify(cssMinify, null, 2)
              : text}{" "}
          </p>
        </div>
      </div>
    </>
  );
}
