import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    circularProgress: {
        color: theme.palette.common.white,
    },
    submit: {
        textTransform: 'uppercase',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.primary.main,
        margin: theme.spacing(6, 2, 2),
        padding: theme.spacing(1),
        width: 160,
        height: 56,
        fontSize: 12,
        fontWeight: 600,
    },
}));

export default useStyles;