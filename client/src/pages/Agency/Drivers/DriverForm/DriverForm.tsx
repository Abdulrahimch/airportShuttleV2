import { Form, Formik } from "formik";
import * as Yup from 'yup';
import useStyles from "./useStyles";
import { Grid, InputLabel, TextField, Select, MenuItem, Typography } from '@material-ui/core';
import CustomButton from "../../../../components/Button/CustomButton";
import { Driver } from '../../../../interface/Driver';

interface Props {
    handleSubmit: (inputs: Driver) => void;
    initValues: Driver
}

function AddClientForm( { handleSubmit, initValues } : Props): JSX.Element {
    const classes = useStyles();

    return (
       <>
        <Formik
            initialValues={{
                email: initValues.email,
                name: initValues.name,
                phoneNumber: initValues.phoneNumber,
                carNumber: initValues.carNumber
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Invalid Email Address').required('Please Enter Email Address'),
                name: Yup.string().required('This field can not be blank'),
                phoneNumber: Yup.number().required('This field can not be blank'),
                carNumber: Yup.string().required('This field can not be blank'),
            })} 
            onSubmit={(values) => {handleSubmit(values)}}

        >
            {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
                <Form onSubmit={handleSubmit} className={classes.form} noValidate>
                    <Grid container direction="column" spacing={2}>
                        <Grid item container justify="space-evenly" spacing={2}>
                            <Grid item>
                                <InputLabel className={classes.label}>
                                    name
                                </InputLabel>
                                <TextField
                                    id="firstName"
                                    name="firstName"
                                    value={values.name}
                                    onChange={handleChange}
                                    error={Boolean(errors.name)}
                                    helperText={errors.name}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <InputLabel className={classes.label}>
                                    Phone Number
                                </InputLabel>
                                <TextField
                                    id="lastName"
                                    name="lastName"
                                    value={values.phoneNumber}
                                    onChange={handleChange}
                                    error={Boolean(errors.phoneNumber)}
                                    helperText={errors.phoneNumber}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }} 
                                />
                            </Grid>
                        </Grid>
                        <Grid item container justify="space-evenly" spacing={2}>
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
                                    car number
                                </InputLabel>
                                <TextField
                                    id="carNumber"
                                    name="carNumber"
                                    value={values.carNumber}
                                    onChange={handleChange}
                                    error={Boolean(errors.carNumber)}
                                    helperText={errors.carNumber}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item container justifyContent='center'>
                            <CustomButton btnText='submit' style="submit" />
                        </Grid>
                    </Grid>
                </Form> 
            )}
        </Formik>
       </>
    )
};

export default AddClientForm;

