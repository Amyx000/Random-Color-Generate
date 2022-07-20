import React, { useState } from "react";
import "./app.css"

function App() {

  const [mycolor, Setmycolor] = useState("rgb(0, 0, 0)")


  const myStyle = {
    backgroundColor: mycolor,

  };

  const clickfunc = () => {

    let a = Math.round(Math.random() * 1000)
    if (a >= 256) {
      a = Math.round(Math.random() * 10)
    }

    let b = Math.round(Math.random() * 1000)
    if (b >= 256) {
      b = Math.round(Math.random() * 10)
    }

    let c = Math.round(Math.random() * 1000)
    if (c >= 256) {
      c = Math.round(Math.random() * 10)
    }

    console.log(a, b, c)
    let result = "rgb(" + a + ", " + b + ", " + c + ")";

    Setmycolor(result)


  }

  

  return (
    <>
      <div className="container" style={myStyle}>
        <div className="colorcode"><span>{mycolor}</span></div>
        <button onClick={clickfunc}>Press Me</button>
      </div>
      <div className="footer"><h2>Arman Kazi 2022</h2></div>
    </>
  );
}

export default App;
