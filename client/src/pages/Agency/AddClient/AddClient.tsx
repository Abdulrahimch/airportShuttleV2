import useStyles from "./useStyles";
import AddClientForm from './AddClientForm/AddClientForm';
import { Grid, Paper, Typography } from '@material-ui/core';


function AddClient(): JSX.Element {
    const classes = useStyles();
    return (
        <>
            <Grid container direction="column" alignItems="center" component="main" spacing={2}>
                <Grid item>
                    <Typography variant='h2' className={classes.title}>
                        add client
                    </Typography>
                </Grid>
                <Grid item>
                    <AddClientForm />
                </Grid>
            </Grid>
        </>
    )
};

export default AddClient;