import { Box, Grid, Paper, Typography } from '@material-ui/core';
import {  useEffect } from 'react';
import NewReservationForm from './NewReservationForm/NewReservationForm';
import useStyles from './useStyles';
import { useHistory } from 'react-router-dom';
import { NewReservationDictionary } from '../../utils/dictionary';

const { engPage, turkishPage } = NewReservationDictionary;
let page: Page = {title: 'rezervasyon ekle', form: turkishPage.form};

interface Page {
    title: string;
    form: {
        type: string;
        from: string;
        to: string;
        pax: string;
        hotel: string;
        fullName: string;
        passenger: string;
        driverNote: string;
        flightNo: string;
        handleSubmit?: () => void;
    };
    
}

let lan = 'eng';

function NewReservation(): JSX.Element {
    const classes = useStyles();
    const history = useHistory();

    const handleSubmit = () => {console.log('Submitting')};

    useEffect(() => { 
        if (lan === 'tr') page = turkishPage; 
        else page = engPage;
        page.form.handleSubmit = handleSubmit;
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
                            <NewReservationForm form={page.form}/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default NewReservation;