import { Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './Compunent/Counter/Counter';
import Navbar from './Compunent/Navbar/Navbar';
import Form from './Compunent/Form/Form';
import Toggle from './Compunent/Toggle/Toggle';
import Practic from './Compunent/Practic';
import ToDoList from './Compunent/ToDoList/ToDoList';
import SerarchProduct from './Compunent/SerarchProduct/SerarchProduct';
import SelectedColor from './Compunent/SelectedColor/SelectedColor';

function App() {
  return (
    <div >
<Navbar />
      <Routes>
        <Route path='/' element={<Counter />}></Route>
        <Route path='/counter' element={<Counter />}></Route>
        <Route path='/form' element={<Form></Form>}></Route>
        <Route path='/toggle' element={<Toggle />}></Route>
        <Route path='/toDoList' element={<ToDoList />}></Route>
        <Route path='/practic' element={<Practic />}></Route>
        <Route path='/serarchProduct' element={<SerarchProduct />}></Route>
        <Route path='/selectColor' element={<SelectedColor />}></Route>
      </Routes>
    </div>
  );
}

export default App;
