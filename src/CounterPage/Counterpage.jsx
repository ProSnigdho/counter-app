import React, {useState} from 'react'
import './counter.css'



function Counterpage() {

    const [count, setCount] = useState(0)


  return (
    <div className='container'>
        <h1>Counter App</h1>
      <div className='display'>
        <span>{count}</span>
      </div>
      <div className='button-group'>
        <button className='button-increment' onClick={() =>setCount(count+1)}>+</button>
        <button className='button-decrement' onClick={() =>setCount(count-1)}>-</button>
        <button className='button-reset' onClick={() =>setCount(0)}>Reset</button>
      </div>
    </div>
  )
  
}

export default Counterpage