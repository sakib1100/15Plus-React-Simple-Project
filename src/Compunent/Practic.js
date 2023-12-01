import React, { useEffect, useState } from 'react';

const Practic = () => {
const [time,setTime] = useState(60);

useEffect(() => {

    if(time > 0){
     const timer =  setTimeout(() => setTime(time-1),1000);
     return () => clearTimeout(timer);
    }
},[time])

    return (
        <div>
          <h1 style={{textAlign: 'center'}}>Practice Section</h1>  


      <h1>Time Left : {time} second.</h1>

        </div>
    );
};

export default Practic;