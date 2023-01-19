import React from 'react'

const welcome = (props) => {
    
  return (
    <div className='welcome_container'>
        <h1>Hey ! {props.data} </h1>
       <h2>Welcome to LPU College</h2>
       <p>Assignment done by {props.data} 12101566</p>
      
    </div>
  )
}

export default welcome
