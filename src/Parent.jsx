import React from "react";
import Child from "./Child";

const Parent = () => {
    const name = "goutam from paret component";
    return (
        <>
        <h1> Parent component</h1>
         <Child nameprops = {name}/>
        
        </>
    )
}

export default Parent 