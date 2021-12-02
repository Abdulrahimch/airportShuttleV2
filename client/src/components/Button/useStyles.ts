import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    circularProgress: {
        color: theme.palette.common.white,
    },
    button: {
        textTransform: 'uppercase',
        borderRadius: theme.shape.borderRadius,
        '&.submit': {
            backgroundColor: theme.palette.primary.main,
            margin: theme.spacing(6, 2, 2),
            padding: theme.spacing(1),
            width: 160,
            height: 56,
            fontSize: 12,
            fontWeight: 600,
        },
        '&.edit': {
            backgroundColor: "#006400",
            padding: theme.spacing(1),
            width: 50,
            height: 25,
            fontSize: 12,
            fontWeight: 600,
        },
        '&.delete': {
            backgroundColor: '#8B0000',
            padding: theme.spacing(1),
            width: 50,
            height: 25,
            fontSize: 12,
            fontWeight: 600,
        },
        '&.processed': {
            backgroundColor: "#006400",
            padding: theme.spacing(1),
            width: 80,
            height: 25,
            fontSize: 12,
            fontWeight: 600,
        }
    },
}));

export default useStyles;