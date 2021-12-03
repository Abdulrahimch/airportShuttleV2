import { Box, Typography, Grid, Paper } from "@material-ui/core";
import AddPaymentForm from "./AddPaymentForm/AddPaymentForm";
import useStyles from "./useStyles";
import { agencyPaymentPage } from '../../../../utils/dictionary';
import { useLanguage } from "../../../../context/useLanguageContext";

const { engPage, turkishPage } = agencyPaymentPage;

function AddPayment(): JSX.Element {
    const classes = useStyles();
    const { language } = useLanguage();
    const page = language === 'eng' ? engPage : turkishPage;
    
    return (
        <Grid container component={Paper} className={classes.root} alignItems='center'>
            <Grid item xs={12} sm={12} md={12} lg={12} >
                <Box
                    display="flex"
                    flexDirection="column"
                    minHeight="100vh"
                    width="100%"
                >
                    <Box>
                        <Typography variant="h4" color="primary" className={classes.title}>
                            { page.title} 
                        </Typography>
                        <AddPaymentForm form={page.form} />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default AddPayment;