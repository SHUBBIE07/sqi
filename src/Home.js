import React from 'react'
import './App.css'
import image from './logo.svg'


const Home = ()=>{
    return(
    <div>
      <h1 className='random'>{Math.random()}</h1>
      <button className='btn btn-success'>click me</button>
      <i className='fa fa-user'></i>
      <img src={image} alt="" />
 
    </div>

    )
}

export default Home