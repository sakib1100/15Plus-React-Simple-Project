import React, { useState } from 'react';
import './toDo.css';
const ToDoList = () => {
    const [input,setInput] = useState('');
    const [todo,setToDo] = useState([]);
    const handleOnsubmit = () => {
        if(input.trim() !== ''){
            setToDo([...todo,input]);
         
        }
    }

    const handleDelete = (index) => {
   const deleteData = todo.filter((_,i) => i!== index);
   setToDo(deleteData);
    }
    return (
        <div>
            <div className='toDo'>
       <div className='forms'>
        <input type='text' onChange={(e) => setInput(e.target.value)} placeholder='Enter value' />
        <a className='btn' onClick={handleOnsubmit}>Add Val</a>
        </div>  
       
        </div>
         <div className='toDoList'>
             <ul>
            {
                todo.map((data,index) => (
                 
                    <span className='listContainer'><li className='listStyle'>{index + 1}. {data} </li> <a onClick={() => handleDelete(index)} className='delete'>Delete</a></span>
                ))
            }
        </ul>   
         </div>
        </div>

    );
};

export default ToDoList;