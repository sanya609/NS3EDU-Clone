import React, { useState } from 'react'

const Child = ({nameprops}) => {
    const [ count , setCount ] = useState("sinu");
    const [ course , setCourse ] = useState("web")
    const [isFullStack, setIsFullStack] = useState(false);


    function increament(){
        setCount(4);
    }
    function updatename(){
        setCount("Sanya");

    }

    function updateCourse(){
        setCourse("full stack")
    }

    function CourseToggle() {
        if (course === "web") {
            setCourse("full stack");
        } else {
            setCourse("web");
        }
    } 

  return (
     <>
       <h1 onClick={updatename}> Child component</h1>
       {nameprops}

       <h1> {count}</h1>
       
       <h2 onClick={updateCourse}>change course</h2>
       <h2>{course}</h2>


       <h3 onClick={CourseToggle}>
          {isFullStack ? "Full Stack Developer" : " Full Stack"}
        </h3>

       {/* useState,useEffect, useContext, */}
     </>
  )
}





export default Child