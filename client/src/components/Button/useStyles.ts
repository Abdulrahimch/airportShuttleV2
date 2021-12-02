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
            height: 25,
        },
        '&.delete': {
            backgroundColor: '#8B0000',
            width: 50,
            height: 25,
        },
        '&.processed': {
            backgroundColor: "#006400",
            width: 80,
            height: 25,
        },
        '&.unprocessed': {
            backgroundColor: '#8B0000',
            width: 100,
            height: 25,
        }
    },
}));

export default useStyles;