import { Grid, Typography, Paper } from '@material-ui/core';
import { Driver } from '../../../../interface/Driver';
import DriverForm from '../DriverForm/DriverForm';
import useStyles from './useStyles';
 
const AddDriver = (): JSX.Element => {
    const { root, title } = useStyles();
    
    const handleSubmit = (inputs: Driver) => {
        console.log(inputs)
    }
    return (
        <>
            <Grid container component={Paper} direction="column" className={root} justifyContent="center" alignItems="center">
                <Grid item>
                    <Typography className={title}>
                        add driver
                    </Typography>
                    <DriverForm handleSubmit={handleSubmit} />
                </Grid>
            </Grid>
        </>
    )
};

export default AddDriver;