import React from 'react'
// import Parent from './learnProps/Parent'
import Learn_useEffect from './components/learn_hooks/Learn_useEffect'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
const App = () => {
  return (
    <>
       {/* <Parent/> */}
       {/* <Learn_useEffect/> */}
       <BrowserRouter>
         <Routes>
           <Route path='/learn-useeffect-page' element={<Learn_useEffect/>}/>
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App