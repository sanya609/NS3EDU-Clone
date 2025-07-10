import React, { useState } from "react";
import Home from "./components/Home.jsx"
import About from "./About.jsx";
function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0)
 

  const student = [
    { strname: "Goutam", age: 20 },
    { strname: "Amit", age: 19 },
    { strname: "Subham", age: 21 },
    { strname: "Sinu", age: 18 },
    { strname: "Kiran", age: 19 },
    { strname: "Lucky", age: 21 }

  ]

  const click = (e) => {
    e.preventDefault();
    setData(...student)
    console.log(data, "after function called");
  }

  const increament = () => {
    setCount(count + 1);
    count++;
  }
  const decreament = () => {
    setCount(count - 1);
    count--;
  }

  const reset = () => {
     setCount(0);
  }


  return (
    <>
      <Home />

      {/* <button style={{backgroundColor:'orange',color:'white',width:'150px',textDecoration:'none',height:'30px',borderRadius:'10px',fontSize:
        '24px'
      }} onClick={click}>click</button> */}
      <div style={{ margin: 'auto' }}><h1>{count}</h1></div>

      <div style={{ margin: 'auto', padding: '20px', gap: '2rem', display: "flex" }}>
        <button style={{
          backgroundColor: 'orange', color: 'white', width: '150px', textDecoration: 'none', height: '30px', borderRadius: '10px', fontSize:
            '24px'
        }} onClick={increament}>Increament</button>

        <button style={{
          backgroundColor: 'orange', color: 'white', width: '150px', textDecoration: 'none', height: '30px', borderRadius: '10px', fontSize:
            '24px'
        }} onClick={decreament}>decreament</button>


        { <button style={{
          backgroundColor: 'orange', color: 'white', width: '150px', textDecoration: 'none', height: '30px', borderRadius: '10px', fontSize:
            '24px'
        }} onClick={reset}>reset</button> }
      </div>
    </>
  )
}



export default App;