import { Form, Formik } from "formik";
import * as Yup from 'yup';
import useStyles from "./useStyles";
import { Grid, InputLabel, TextField, Select, MenuItem, Typography } from '@material-ui/core';
import CustomButton from "../../../../components/Button/CustomButton";
import { Driver } from '../../../../interface/Driver';

interface Props {
    handleSubmit: (inputs: Driver) => void;
}

function AddClientForm( { handleSubmit } : Props): JSX.Element {
    const classes = useStyles();

    return (
       <>
        <Formik
            initialValues={{
                email: '',
                firstName: '',
                lastName: '',
                carNumber: ''
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Invalid Email Address').required('Please Enter Email Address'),
                firstName: Yup.string().required('This field can not be blank'),
                lastName: Yup.string().required('This field can not be blank'),
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
                                    card number
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

