import { Box, Grid, Paper, Typography } from '@material-ui/core';
import {  useEffect } from 'react';
import useStyles from './useStyles';
import AddReservationForm from './AddReservationForm/AddReservationForm';
import { useHistory } from 'react-router-dom';
import { NewReservationDictionary } from '../../../utils/dictionary';
import { Page, FormValues } from '../../../interface/Reservation';
import { postReservation } from '../../../helpers/APICalls/reservation';
import { useSnackBar } from '../../../context/useSnackbarContext';

const { engPage, turkishPage } = NewReservationDictionary;
let page: Page = {title: 'rezervasyon ekle', form: turkishPage.form};


let lan = 'tr';

function AddReservation(): JSX.Element {
    const classes = useStyles();
    const history = useHistory();
    const { updateSnackBarMessage } = useSnackBar();

    const handleSubmit = (values: FormValues) => {
        values.timezone = values.selectedDate.getTimezoneOffset();
        postReservation(values).then((data) => {
            if (data.error){
                updateSnackBarMessage(data.error.message);
            } else if (data.success){
                updateSnackBarMessage('reservation has been created successfully');
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        })
    };

    useEffect(() => { 
        if (lan === 'tr') page = turkishPage; 
        else page = engPage;
    }, [history])

    return (
        <>
            <Grid container component={Paper} className={classes.root} alignItems='center'>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Box
                        display="flex"
                        flexDirection="column"
                        minHeight="100vh"
                    >
                        <Box>
                            <Typography variant="h2" color="primary" className={classes.title}>
                                { page.title} 
                            </Typography>
                            <AddReservationForm form={page.form} handleSubmit={handleSubmit}/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default AddReservation;