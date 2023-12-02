import React, { useEffect, useState } from 'react';

const Practic = () => {
const [time,setTime] = useState(60);
const [backgroundColor,setBackgroundColor] = useState('green')
useEffect(() => {

    if(time > 0){
     const timer =  setTimeout(() => setTime(time-1),1000);
     return () => clearTimeout(timer);
    }
},[time])

const changeBgColor = () => {
  const bgColorChange = backgroundColor === "tomato" ? "orange" : 'black';
  setBackgroundColor(bgColorChange);
}

    return (
        <div>
          <h1 style={{textAlign: 'center'}}>Practice Section</h1>  


      <h1>Time Left : {time} second.</h1>
<br />

<button onClick={changeBgColor}>Change Color</button>

<div style={{
    backgroundColor,
    height: "200px",
    width : "200px",
    cursor:"pointer"
}}>
Click for Change backgroundColor
</div>


        </div>
    );
};

export default Practic;