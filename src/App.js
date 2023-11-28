import { Route, Router, Routes } from 'react-router-dom';
import TaskList from './TaskList';
import AddEditTask from './AddEditTask';
import { Typography } from '@mui/material';

function App() {
  return ( 
    <> 
      <Typography variant="h4" textAlign='center'>
        Task Management App
      </Typography>
      <Routes>
        <Route path='/' element={<TaskList />}></Route>
        <Route path='/add' element={<AddEditTask />}></Route>
        <Route path='/edit' element={<AddEditTask />}></Route>
        <Route path='*' element={'Page not found'}></Route>
      </Routes>
    </>
  );
}

export default App;
