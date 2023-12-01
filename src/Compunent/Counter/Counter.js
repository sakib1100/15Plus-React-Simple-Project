import React, { useState } from 'react';
import './Counter.css';
const Counter = () => {
    const [count,setCount] = useState(0);
    const [InitialVal,setInitialVal] = useState(0);
    return (
       <div>
        <h1 style={{textAlign:"center", color:"tomato"}}>Counter Project</h1>
         <div className='container'>
         <div className='counter'>
         <span className='value'>{count}</span> <br></br>
         <button onClick={() =>{count > 0 && setCount(count - 1)}}>-</button>   
         <button onClick={() => setCount(InitialVal)}>Reset</button>
         <button onClick={() => setCount(count + 1)}>+</button> 
        </div>  
        </div>
       </div>
    );
};

export default Counter;