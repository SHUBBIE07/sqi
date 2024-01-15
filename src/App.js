import React from 'react';
import Image from './logo.svg'
// import mystyle from './Styl/Mystyle'


const App = () =>{
  return(
    <div>
      <h1 style={{color:"black",backgroundColor:"green"}}>App</h1>
      <img style={{width: "200px"}} src={Image} alt="" />
      {/* <p style={mystyle.head}>new class</p>  */}
      {/* <p style={mystyle.header}>React</p> */}
      {/* <p style={mystyle.nav}>Another</p> */}
    </div>
  )
}

export default App;
