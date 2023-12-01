import React, { useState } from 'react';
import './Toggle.css';
const Toggle = () => {
    const [proccess,setProccess] = useState(true);
    return (
        <div>
        <h1 style={{textAlign:"center", color:"tomato"}}>Toggle Project</h1>
        <div>
        <label>
            <input onClick={() => setProccess(!proccess)} type='checkBox' />
        </label>

        </div>

<h1 style={{textAlign:"center"}}>{proccess ? <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif" alt="🔥" width="100" height="100" /> : <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.gif" alt="🎉" width="100" height="100" />
}</h1>


        </div>
    );
};

export default Toggle;