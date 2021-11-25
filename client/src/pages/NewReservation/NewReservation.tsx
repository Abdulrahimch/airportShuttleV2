import { Box, Grid, Paper, Typography } from '@material-ui/core';
import {  useEffect } from 'react';
import NewReservationForm from './NewReservationForm/NewReservationForm';
import useStyles from './useStyles';
import { useHistory } from 'react-router-dom';
import { NewReservationDictionary } from '../../utils/dictionary';
import { Page, FormValues } from '../../interface/Reservation';

const { engPage, turkishPage } = NewReservationDictionary;
let page: Page = {title: 'rezervasyon ekle', form: turkishPage.form};


let lan = 'tr';

function NewReservation(): JSX.Element {
    const classes = useStyles();
    const history = useHistory();

    const handleSubmit = (values: FormValues) => {console.log(values)};

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
                            <NewReservationForm form={page.form} handleSubmit={handleSubmit}/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default NewReservation;