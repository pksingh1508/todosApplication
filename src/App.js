
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import AllTodo from "./pages/AllTodo";
import CreateTodo from "./pages/CreateTodo";
import UpdateTodo from './components/UpdateTodo';

function App() {
  return (
    <div>

        <NavBar />

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/all' element={<AllTodo/>}/> 
          <Route path='/createTodo' element={<CreateTodo/>}/>
          <Route path='/update/:id' element={<UpdateTodo/>}/>
        </Routes>
    </div>
  );
}

export default App;
