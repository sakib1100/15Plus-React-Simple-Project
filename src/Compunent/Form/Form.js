import React, { useState } from 'react';
import './Form.css';
const Form = () => {
    const [value,setValue] = useState('');
    return (
        <div>
            <div className='formCOntainer'>
            <div className='form'>
                <input placeholder='Text...' onChange={(e) => setValue(e.target.value)} type='text'  />
            </div>
        </div>
        <h2 style={{textAlign:"center"}}>Input Value is -<br></br> {value}</h2>
        </div>
    );
};

export default Form;