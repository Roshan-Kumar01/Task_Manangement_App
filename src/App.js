import { Route, Router, Routes } from 'react-router-dom';
import TaskList from './TaskList';
import AddEditTask from './AddEditTask';

function App() {
  return ( 
    <>
      <Routes>
        <Route path='/' element={<TaskList />}></Route>
        <Route path='/add/:id' element={<AddEditTask />}></Route>
        <Route path='/edit/:id' element={<AddEditTask />}></Route>
        <Route path='*' element={'Page not found'}></Route>
      </Routes>
    </>
  );
}

export default App;
