import React from 'react';
import arrow from '../assets/arrow.png';

const Join=()=> {
  return (
    <div className="joinBlock">
    <h1>Join the Newsletter!</h1>
    <p>
      You’ll receive an email every once in a while about new products,
      courses, and videos!
    </p>
    <div className="formBlock">
   <input placeholder="name@example.com" value=''/>
   <button><img src={arrow} alt='arrow' width='14' height='14' /></button>
    </div>
    <p>We’ll never share your details. See our Privacy Policy</p>
  </div>
 
  )
}

export default Join;