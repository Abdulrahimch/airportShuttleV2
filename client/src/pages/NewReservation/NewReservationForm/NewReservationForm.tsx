import { Formik, FieldArray, Field, Form } from 'formik';
import * as Yup from 'yup';
import useStyles from './useStyles';
import { 
        Box, 
        InputLabel, 
        TextField, 
        Grid, 
        Select, 
        MenuItem, 
        Button, 
        CircularProgress, 
        FormHelperText } from '@material-ui/core';


const airports = [
    {value: 1, name: 'Istanbul Airport'}, 
    {value: 2, name:'Sabiha Airport'}
 ];
const resorts = [
    {value: 1, name: 'Sultan Ahmet'},
    {value: 2, name: 'Sirkeci'},
    {value: 3, name: 'Taksim'},
    {value: 4, name: 'Fatih'},
    {value: 5, name: 'Laleli'}
];

interface Props {
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
    }
}

function NewReservationForm(form : Props): JSX.Element {
    const classes = useStyles();
    const  { type, from, to, pax, hotel, driverNote, flightNo, handleSubmit } = form.form;

    return (
        <>
            <Box>
                <Formik
                    initialValues={{
                        type: 0,
                        from: 0,
                        to: 0,
                        hotel: '',
                        pax: 0,
                        flightNo: '',
                        driverNote: '',
                        passengers: []
                    }}
                    validationSchema={Yup.object().shape({ 
                        type: Yup.string().required('This Field is required'),
                        from:  Yup.string().required('This Field is required'),
                        to: Yup.string().required('This Field is required'),
                        hotel: Yup.string().required('This Field is required'),
                        flightNo: Yup.string().required('This Field is required'),
                        driverNote: Yup.string(),
                        pax: Yup.number().min(1).max(10).default(1),
                    })}
                    onSubmit={handleSubmit ? handleSubmit:  () => {console.log('this is error')}}
                >   
                    {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
                    <form onSubmit={handleSubmit} className={classes.form} noValidate>
                        <Grid container direction='column' alignItems='center'>
                            <Grid item>
                                <Grid item container className={classes.itemContainer} spacing={4}>
                                    <Grid item>
                                        <InputLabel id="type" className={classes.inputLabel}>
                                            {type}
                                        </InputLabel>
                                        <Select
                                            id="type"
                                            name="type"
                                            autoWidth
                                            MenuProps={{
                                                anchorOrigin: {
                                                  vertical: "bottom",
                                                  horizontal: "left"
                                                },
                                                transformOrigin: {
                                                  vertical: "top",
                                                  horizontal: "left"
                                                },
                                                getContentAnchorEl: null
                                            }}
                                            value={values.type}
                                            onChange={handleChange}
                                            classes={{ select: classes.select }}
                                        >
                                            <MenuItem value={1}>Airport to Resort</MenuItem>
                                            <MenuItem value={2}>Resort to Airport</MenuItem>
                                        </Select>
                                        <FormHelperText error={Boolean(errors.type)}>{errors.type}</FormHelperText>
                                    </Grid>
                                    <Grid item> 
                                        <InputLabel className={classes.inputLabel}>
                                            {pax}
                                        </InputLabel>
                                        <Select
                                            id="pax"
                                            name="pax"
                                            autoWidth
                                            MenuProps={{
                                                anchorOrigin: {
                                                  vertical: "bottom",
                                                  horizontal: "left"
                                                },
                                                transformOrigin: {
                                                  vertical: "top",
                                                  horizontal: "left"
                                                },
                                                getContentAnchorEl: null
                                            }}
                                            value={values.pax}
                                            onChange={handleChange}
                                            classes={{ select: classes.select }}
                                        >
                                            {
                                                Array(10).fill(0).map((_, idx) => (
                                                <MenuItem className={classes.menuItem} value={idx+1}>{idx+1}</MenuItem>
                                            ))}
                                            
                                        </Select>
                                        <FormHelperText error={Boolean(errors.pax)}>{errors.pax}</FormHelperText>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item >
                                <Grid item container className={classes.itemContainer} spacing={4}>
                                    <Grid item>
                                        <InputLabel className={classes.inputLabel}>
                                            {from}
                                        </InputLabel>
                                        <Select
                                            id="from"
                                            name="from"
                                            autoWidth
                                            MenuProps={{
                                                anchorOrigin: {
                                                  vertical: "bottom",
                                                  horizontal: "left"
                                                },
                                                transformOrigin: {
                                                  vertical: "top",
                                                  horizontal: "left"
                                                },
                                                getContentAnchorEl: null
                                            }}
                                            value={values.from}
                                            onChange={handleChange}
                                            classes={{ select: classes.select }}
                                            >
                                            {values.type === 1 ? airports.map((airport) => (
                                                <MenuItem value={airport.value}>{airport.name}</MenuItem>
                                            )): resorts.map((resort) => (
                                                <MenuItem value={resort.value}>{resort.name}</MenuItem>
                                            ))
                                            }
                                        </Select>
                                        <FormHelperText error={Boolean(errors.from)}>{errors.from}</FormHelperText>
                                    </Grid>
                                    <Grid item>
                                        <InputLabel className={classes.inputLabel}>
                                            {to}
                                        </InputLabel>
                                        <Select
                                            id="to"
                                            name="to"
                                            autoWidth
                                            MenuProps={{
                                                anchorOrigin: {
                                                  vertical: "bottom",
                                                  horizontal: "left"
                                                },
                                                transformOrigin: {
                                                  vertical: "top",
                                                  horizontal: "left"
                                                },
                                                getContentAnchorEl: null
                                            }}
                                            value={values.to}
                                            onChange={handleChange}
                                            classes={{ select: classes.select }}
                                        >
                                            {values.type === 2 ? airports.map((airport) => (
                                                <MenuItem value={airport.value}>{airport.name}</MenuItem>
                                            )): resorts.map((resort) => (
                                                <MenuItem value={resort.value}>{resort.name}</MenuItem>
                                            ))
                                            }
                                        </Select>
                                        <FormHelperText error={Boolean(errors.to)}>{errors.to}</FormHelperText>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid item container className={classes.itemContainer} spacing={6}>
                                    <Grid item>
                                        <InputLabel className={classes.inputLabel}>
                                            {hotel}
                                        </InputLabel>
                                        <TextField 
                                            id='hotel'
                                            name='hotel'
                                            error={Boolean(errors.hotel)}
                                            helperText={errors.hotel}
                                            InputProps= {{
                                                classes: { input: classes.inputs },
                                                disableUnderline: true
                                            }}
                                            value={values.hotel}
                                            onChange={handleChange}
                                            
                                        />
                                    </Grid>
                                    <Grid item>
                                        <InputLabel className={classes.inputLabel}>
                                            {flightNo}
                                        </InputLabel>
                                        <TextField 
                                            id='flightNo'
                                            name='flightNo'
                                            InputProps= {{
                                                classes: { input: classes.inputs },
                                                disableUnderline: true
                                            }}
                                            value={values.flightNo}
                                            onChange={handleChange}
                                            
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <InputLabel className={classes.inputLabel}>
                                    {driverNote}
                                </InputLabel>
                                <TextField 
                                    id='driverNote'
                                    name='driverNote'
                                    multiline
                                    rows={4}
                                    InputProps= {{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                    value={values.driverNote}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item lg={6}>
                                <Grid item container className={classes.itemContainer} spacing={4} >
                                    <FieldArray name="passengers">
                                        {
                                            (fieldArrayProps ) => {
                                                const { form } = fieldArrayProps;
                                                const { values } = form;
                                                const { pax } = values;
                                                let allPassengers = new Array(pax).fill('');
                                                return ( 
                                                    <Form>
                                                        {
                                                            allPassengers.map((passenger: any, index: number) => (
                                                                <Box>
                                                                    <InputLabel className={classes.fieldInputLabel}>
                                                                        passenger {index + 1} full name 
                                                                    </InputLabel>
                                                                    <Field
                                                                        id={`passengers[${index}]`}
                                                                        name={`passengers[${index}]`}
                                                                        className={classes.select}
                                                                        style={{ position: 'relative' }}
                                                                        
                                                                    />
                                                                </Box>
                                                            ))
                                                        }
                                                    </Form>
                                                )   
                                            }
                                        }
                                    </FieldArray>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Button size="large" type="submit" variant="contained" color="primary" className={classes.submit}>
                                    {isSubmitting ? <CircularProgress className={classes.circularProgress} /> : 'Submit'} 
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    )}
                </Formik>
            </Box>
        </>
    )
}
export default NewReservationForm;
