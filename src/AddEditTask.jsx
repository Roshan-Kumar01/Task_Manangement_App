import { useForm } from "react-hook-form";
import CustomTextField from "./commonComponents/CustomTextField";
import { Alert, AlertTitle, Autocomplete, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { toast, ToastContainer } from 'react-toastify';
import AlertDialog from "./commonComponents/AlertDialog";
import { useState } from "react";

const AddEditTask = (props) => {
    const defaultValues = {
        taskName: ''
    }

    const {
        control,
        watch,
        setValue,
        clearErrors,
        getValues,
        setError,
        handleSubmit,
        formState: { errors },
        trigger,
    } = useForm({ defaultValues })

    const [openDialog, setOpenDialog] = useState({
        open: false,
        content: '',
    });

    const priorityOptions = [
        { label: 'Low', value: 'low' },
        { label: 'Medium', value: 'medium' },
        { label: 'High', value: 'high' },
    ]

    const handleTaskChange = (e, name) => { 
        const value = e?.target?.value
        setValue(name, value)

    }

    const handleSumitClick = (val) => {
        // fetching old data
        const storedArrayString = localStorage.getItem('myArray');
        const storedArrayOfObjects = JSON.parse(storedArrayString);

        // setting new data
        const newArr = [val, ...(storedArrayOfObjects?.length > 0 ? storedArrayOfObjects : [])]
        const arrayOfObjectsString = JSON.stringify(newArr);

        // Store the stringified array in localStorage under a specific key
        localStorage.setItem('myArray', arrayOfObjectsString);
        setOpenDialog({
            open: true, 
            content: <Alert severity="success"> 
                <AlertTitle>Success</AlertTitle>
                Task added successfully <strong>check it out!</strong>
            </Alert>
        })
    }

    const handlePriorityChange = (e, item, reason, details) => {
        setValue('priority', item)
    }

    return(
        <>
            <Grid
                container
                justifyContent='center'
            >
                <Grid item xs={8} sm={8} md={8} lg={8} xl={8} margin='10px 0px'>
                    <CustomTextField
                        control={control}
                        errors={errors}
                        helperText={errors}
                        label="Task Name"
                        placeholder='Enter task name'
                        name='taskName'
                        onChange={handleTaskChange}
                        variant='outlined'
                        fullWidth
                        rules={{
                            required: "This field is required"
                        }}
                    />
                </Grid>
                <Grid item xs={8} sm={8} md={8} lg={8} xl={8} margin='10px 0px'>
                    <CustomTextField
                        control={control}
                        errors={errors}
                        helperText={errors}
                        label="Task Description"
                        placeholder='Enter task description'
                        name='taskDescription'
                        onChange={handleTaskChange}
                        variant='outlined'
                        fullWidth
                    />
                </Grid> 
                <Grid item xs={8} sm={8} md={8} lg={8} xl={8} margin='10px'>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={priorityOptions}
                        // sx={{ width: 300 }}
                        onChange={handlePriorityChange}
                        renderInput={(params) => <TextField {...params} label="Priority" />}
                    />
                </Grid>
                <Grid item xs={8} sm={8} md={8} lg={8} xl={8} margin='10px'>
                    <Button variant="contained" 
                        onClick={handleSubmit(handleSumitClick)}
                    >
                        Submit Task
                    </Button>
                </Grid>
                <ToastContainer />
            </Grid>
            <AlertDialog 
                open={openDialog?.open}
                setOpen={setOpenDialog}
                content={openDialog?.content}
            />
        </>
    )
}

export default AddEditTask;