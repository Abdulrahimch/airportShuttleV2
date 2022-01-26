import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    circularProgress: {
        color: theme.palette.common.white,
    },
    button: {
        textTransform: 'uppercase',
        borderRadius: theme.shape.borderRadius,
        fontSize: 12,
        fontWeight: 600,
        padding: theme.spacing(1),
        '&.submit': {
            backgroundColor: theme.palette.primary.main,
            margin: theme.spacing(6, 2, 2),
            width: 160,
            height: 56,
        },
        '&.edit': {
            backgroundColor: "#006400",
            width: 50,
            height: 40,
        },
        '&.delete': {
            backgroundColor: '#8B0000',
            width: 50,
            height: 40,
        },
        '&.processed': {
            backgroundColor: "#006400",
            width: 100,
            height: 40,
        },
        '&.unprocessed': {
            backgroundColor: '#8B0000',
            width: 120,
            height: 40,
        },
        '&.addPayment': {
            backgroundColor: '#006400',
            width: 100,
            height: 25,
        },
        '&.allPayments': {
            backgroundColor: '#006400',
            width: 100,
            height: 25,
        },
        '&.details': {
            backgroundColor: '#006400',
            width: 100,
            height: 25,
        },
        '&.driverDetails': {
            backgroundColor: '#0000FF',
            width: 100,
            height: 40,
        },
    },
}));

export default useStyles;