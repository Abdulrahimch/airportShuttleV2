import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh'
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 800,
        fontSize: 24,
        color: 'primary',
        marginBottom: '3em',
        textAlign: "center",

    }
}));

export default useStyles;