import { Box, Grid, Typography, Paper } from '@material-ui/core';
import useStyles from './useStyles';
import LoginForm from './LoginForm/LoginForm';

function Login(): JSX.Element {
    const classes = useStyles();
    const handleSubmit = () => {console.log('it is submited')};


    return (
        <>
            <Grid container component="main" className={classes.root} spacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={8} >
                    <img src="https://airportshuttle0.s3.amazonaws.com/airportShuttle03.jpg" alt='sign in' className={classes.signinImage} />
                </Grid>
                <Grid item component={Paper} xs={6} sm={6} md={6} lg={4}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        minHeight="100vh"
                    >
                        <Box>
                            <Typography variant="h2" className={classes.welcome}>Sign in</Typography>
                        </Box>
                        <LoginForm handleSubmit={handleSubmit} />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
  }

export default  Login;