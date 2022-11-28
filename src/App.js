// import axios from "axios";
// import { useEffect, useState } from "react";
import Weather from "./components/Weather";

// function App() {
//   const [data, setData] = useState({});
 



//   useEffect(() => {
//     axios.get('https://random.dog/woof.json').then(response=>{
//       console.log(response)
//       setData(response)
//     })

//   },[])

  // return (
  //   <div>
  //     <Weather />
  //          {/* <img src={data.data?.url}   /> */}

        
  //   </div>
  // );


import React from 'react'

function App() {
  return (
    <>  
      <Weather />
    </>
  )
}

export default App