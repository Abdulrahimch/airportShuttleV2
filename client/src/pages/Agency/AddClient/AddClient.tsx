import useStyles from "./useStyles";
import AddClientForm from './AddClientForm/AddClientForm';
import { Grid, Typography } from '@material-ui/core';
import { postClient } from '../../../helpers/APICalls/user';
import { Client } from '../../../interface/Client';
import { useSnackBar } from '../../../context/useSnackbarContext';


function AddClient(): JSX.Element {
    const classes = useStyles();
    const { updateSnackBarMessage } = useSnackBar();
    
    const handleSubmit = (inputs: Client) => {
        postClient(inputs).then((data) => {
            if (data.error) {
                console.log(data.error);
                updateSnackBarMessage(data.error.message);
            } else if (data.success){
                console.log(data.success);
                updateSnackBarMessage('Client has been added successfully!')
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        });
    }
    return (
        <>
            <Grid container direction="column" alignItems="center" component="main" spacing={2}>
                <Grid item>
                    <Typography variant='h2' className={classes.title}>
                        add client
                    </Typography>
                </Grid>
                <Grid item>
                    <AddClientForm handleSubmit={handleSubmit}/>
                </Grid>
            </Grid>
        </>
    )
};

export default AddClient;
