import { Button, Grid, Typography } from "@mui/material";
import TaskListTable from "./Table";
import { useNavigate } from "react-router-dom";

const TaskList = (props) => {
    const navigate = useNavigate()
    
    return(
        <>
            <Grid container justifyContent='flex-end' marginBottom='20px'>
                <Button 
                    variant="contained"
                    onClick={() => navigate('/add')}
                
                >Add Task</Button>
            </Grid>
            <TaskListTable />
        </>
    )
}

export default TaskList;