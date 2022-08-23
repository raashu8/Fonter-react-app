// import Home from "./home";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import React, { useState } from "react";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [titname, setTitName] = useState("Activate Dark Mode");

  const changemode = () => {
    if (mode === "dark") {
      setMode("light");
      setTitName("Activate Dark Mode");
      document.body.style.backgroundColor = "white";
      document.title= "Fonter App";

    } else {
      setMode("dark");
      setTitName("Activate Light Mode");
      document.body.style.backgroundColor = "#002451";
      document.title= "Fonter Dark Mode";
    }
  };

  return (
    <>
    
      <Navbar
        title="Home"
        subtit="About"
        toglemode={changemode}
        mode={mode}
        new12={titname}
      />

      <Textarea heading="Enter some text here" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
