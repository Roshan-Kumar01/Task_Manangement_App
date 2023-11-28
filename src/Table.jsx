import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import { setInLocalStorage } from './utils/utils';
import AlertDialog from './commonComponents/AlertDialog';
import { Alert, AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function TaskListTable() {
  const navigate = useNavigate();

  const [rows, setRows] = useState([])
  const [openDialog, setOpenDialog] = useState({
    open: false,
    content: '',
  });
  const [selectedEditableObject, setSelectedEditableObject] = useState(null)

  const storedArrayString = localStorage.getItem('myArray');
  const storedArrayOfObjects = JSON.parse(storedArrayString);

  const handleRowSelectionModelChange = (param) => {
    console.log('param', param)
  }

  const handleDelete = (param) => {
    const filteredArr = rows?.filter((val) => val.id !== param.id)
    setInLocalStorage('myArray', filteredArr);

    setOpenDialog({
      open: true,
      content: <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Task deleted successfully <strong>check it out!</strong>
      </Alert>
    })
  }

  const handleEdit = (param) => {
    setInLocalStorage('editItem', [param?.row])
    navigate('/edit')
  }

  const columns = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'taskName',
      headerName: 'Task Name',
      width: 300,
    },
    {
      field: 'taskDescription',
      headerName: 'Task Description',
      width: 300,
    },
    {
      field: 'priority',
      headerName: 'Priority',
      width: 200,
      renderCell: (cellValues) => {
        return(
          <>{cellValues?.row?.priority?.label}</>
        )
      }
    },
    {
      field: 'age',
      headerName: 'Action',
      type: 'number',
      // width: 110,
      renderCell: (cellValues) => {
        return(
          <>
            <ModeEditIcon style={{cursor: 'pointer'}} onClick={() => handleEdit(cellValues)}/>
            <DeleteIcon style={{cursor: 'pointer', marginLeft: '20px'}} onClick={() => handleDelete(cellValues)}/>
          </>
        )
      }
    },
  ];

  useEffect(() => {
    if(storedArrayOfObjects?.length > 0) {
      setRows(storedArrayOfObjects);
    }
    else {
      setRows([
        {
          id: 1,
          priority: {
            label: 'Medium',
            value: 'medium',
          },
          taskDescription: 'Default task',
          taskName: 'Default task',
        }
      ])
    }

  }, [storedArrayOfObjects?.length])

  return (
    <>
      <Box sx={{ height: 370, width: '100%' }}>
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
          disableSelectionOnClick
          onRowSelectionModelChange={handleRowSelectionModelChange}
        />
      </Box> 
      <AlertDialog
        open={openDialog?.open}
        setOpen={setOpenDialog}
        content={openDialog?.content}
      />
    </>
  );
}