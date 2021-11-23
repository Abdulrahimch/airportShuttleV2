import { Formik } from "formik";
import * as Yup from 'yup';
import useStyles from "./useStyles";
import { Grid, InputLabel, TextField, Select, MenuItem, Typography, Box } from '@material-ui/core';
import CustomButton from "../../../../components/Button/CustomButton";

function AddClientForm(): JSX.Element {
    const handleSubmit = () => {console.log('submitting')};
    const classes = useStyles();

    return (
       <>
        <Formik
            initialValues={{
                email: '',
                firstName: '',
                lastName: '',
                businessType: '',
                address: '',
                IstAirportMaxFourPaxCost: 0,
                IstAirportMaxSixPaxCost: 0,
                IstAirportMaxTenPaxCost: 0,
                SawAirportMaxFourPaxCost: 0,
                SawAirportMaxSixPaxCost: 0,
                SawAirportMaxTenPaxCost: 0,
            }}
            validatoinSchema={Yup.object().shape({
                email: Yup.string().email('Invalid Email Address').required('Please Enter Email Address'),
                firstName: Yup.string().required('Please Enter Your First Name'),
                lastName: Yup.string().required('Please Enter Your Last Name'),
                address: Yup.string().required('Please Enter Your Address'),
                businessType: Yup.string().required('please Enter Bussiness Type'),
                maxFourPaxCost: Yup.number().min(0).required('Please enter the cost for (1 - 4) Pax'),
                maxsixPaxCost: Yup.number().min(0).required('Please enter the cost for (1 - 6) Pax'),
                maxtenPaxCost: Yup.number().min(0).required('Please enter the cost for (1 - 10) Pax'),
            })}
            onSubmit={handleSubmit}
        >
            {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
                <form onSubmit={handleSubmit} className={classes.form} noValidate>
                    <Grid container direction="column" spacing={2}>
                        <Grid item container justify="space-evenly">
                            <Grid item>
                                <InputLabel className={classes.label}>
                                    first name
                                </InputLabel>
                                <TextField
                                    id="firstName"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    error={Boolean(errors.firstName)}
                                    helperText={errors.firstName}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <InputLabel className={classes.label}>
                                    last name
                                </InputLabel>
                                <TextField
                                    id="lastName"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    error={Boolean(errors.lastName)}
                                    helperText={errors.lastName}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }} 
                                />
                            </Grid>
                        </Grid>
                        <Grid item container justify="space-evenly">
                            <Grid item>
                                <InputLabel className={classes.label}>
                                    email
                                </InputLabel>
                                <TextField
                                    id="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    error={Boolean(errors.email)}
                                    helperText={errors.email}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <InputLabel className={classes.label}>
                                    business type
                                </InputLabel>
                                <Select
                                    id="businessType"
                                    name="businessType"
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
                                    value={values.businessType}
                                    onChange={handleChange}
                                    classes={{ select: classes.select }}
                                >
                                    <MenuItem value={0}>Hotel</MenuItem>
                                    <MenuItem value={1}>Restaurant</MenuItem>
                                    <MenuItem value={1}>Other</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                        <Grid item container justify="center">
                            <Grid item>
                                <InputLabel className={classes.label}>
                                        address
                                </InputLabel>
                                <TextField
                                    id="address"
                                    name="address"
                                    value={values.address}
                                    onChange={handleChange}
                                    error={Boolean(errors.address)}
                                    fullWidth
                                    helperText={errors.address}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Typography align="center" className={classes.typography}>
                            ist airport shuttle cost in TL
                        </Typography>
                        <Grid item container justify="space-evenly">
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <InputLabel className={classes.label}>
                                     (1-4) pax
                                </InputLabel>
                                <TextField
                                    id="IstAirportMaxFourPaxCost"
                                    name="IstAirportMaxFourPaxCost"
                                    value={values.IstAirportMaxFourPaxCost}
                                    onChange={handleChange}
                                    error={Boolean(errors.IstAirportMaxFourPaxCost)}
                                    helperText={errors.IstAirportMaxFourPaxCost}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <InputLabel className={classes.label}>
                                    (4-6) pax
                                </InputLabel>
                                <TextField
                                    id="IstAirportMaxSixPaxCost"
                                    name="IstAirportMaxSixPaxCost"
                                    value={values.IstAirportMaxSixPaxCost}
                                    onChange={handleChange}
                                    error={Boolean(errors.IstAirportMaxSixPaxCost)}
                                    helperText={errors.IstAirportMaxSixPaxCost}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <InputLabel className={classes.label}>
                                    (6-10) pax
                                </InputLabel>
                                <TextField
                                    id="IstAirportMaxTenPaxCost"
                                    name="IstAirportMaxTenPaxCost"
                                    value={values.IstAirportMaxTenPaxCost}
                                    onChange={handleChange}
                                    error={Boolean(errors.IstAirportMaxTenPaxCost)}
                                    helperText={errors.IstAirportMaxTenPaxCost}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Typography align="center" className={classes.typography}>
                            saw airport shuttle cost in TL
                        </Typography>
                        <Grid item container justify="space-evenly">
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <InputLabel className={classes.label}>
                                     (1-4) pax
                                </InputLabel>
                                <TextField
                                    id="SawAirportMaxFourPaxCost"
                                    name="SawAirportMaxFourPaxCost"
                                    value={values.SawAirportMaxFourPaxCost}
                                    onChange={handleChange}
                                    error={Boolean(errors.SawAirportMaxFourPaxCost)}
                                    helperText={errors.SawAirportMaxFourPaxCost}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <InputLabel className={classes.label}>
                                    (4-6) pax
                                </InputLabel>
                                <TextField
                                    id="SawAirportMaxSixPaxCost"
                                    name="SawAirportMaxSixPaxCost"
                                    value={values.SawAirportMaxSixPaxCost}
                                    onChange={handleChange}
                                    error={Boolean(errors.SawAirportMaxSixPaxCost)}
                                    helperText={errors.SawAirportMaxSixPaxCost}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <InputLabel className={classes.label}>
                                    (6-10) pax
                                </InputLabel>
                                <TextField
                                    id="SawAirportMaxTenPaxCost"
                                    name="SawAirportMaxTenPaxCost"
                                    value={values.SawAirportMaxTenPaxCost}
                                    onChange={handleChange}
                                    error={Boolean(errors.SawAirportMaxTenPaxCost)}
                                    helperText={errors.SawAirportMaxTenPaxCost}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item container justifyContent='center'>
                            <CustomButton isSubmitting={isSubmitting} text='submit'/>
                        </Grid>
                    </Grid>
                </form> 
            )}
        </Formik>
       </>
    )
};

export default AddClientForm;

