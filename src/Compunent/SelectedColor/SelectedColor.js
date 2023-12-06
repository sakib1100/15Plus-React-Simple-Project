import React from 'react';
import { useState } from 'react';
import './SelectColor.css'
const SelectedColor = () => {
    const [selectColor,setSelectColor] = useState('#000');


const handleOnchange = (e) => {
    setSelectColor(e.target.value);
}

    return (
      <div>
<h1 style={{textAlign:"center", color:"tomato"}}>Select Color</h1>

          <div className='colorContainer'>
     <div className='selectColor'>
<input type='color' onChange={handleOnchange} />
<div style={{width:"300px", height:"300px", backgroundColor:selectColor}}></div>
    </div>       
        </div>
      </div>
    );
};

export default SelectedColor;