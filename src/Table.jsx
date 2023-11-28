import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'taskName',
    headerName: 'Task Name',
    width: 150,
    editable: true,
  },
  {
    field: 'taskDescription',
    headerName: 'Task Description',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Action',
    type: 'number',
    // width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, taskDescription: 'Snow', taskName: 'Jon', age: 35 },
  { id: 2, taskDescription: 'Lannister', taskName: 'Cersei', age: 42 },
  { id: 3, taskDescription: 'Lannister', taskName: 'Jaime', age: 45 },
  { id: 4, taskDescription: 'Stark', taskName: 'Arya', age: 16 },
  { id: 5, taskDescription: 'Targaryen', taskName: 'Daenerys', age: null },
  { id: 6, taskDescription: 'Melisandre', taskName: null, age: 150 },
  { id: 7, taskDescription: 'Clifford', taskName: 'Ferrara', age: 44 },
  { id: 8, taskDescription: 'Frances', taskName: 'Rossini', age: 36 },
  { id: 9, taskDescription: 'Roxie', taskName: 'Harvey', age: 65 },
];

export default function TaskListTable() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}