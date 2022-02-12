import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridItem: {
        position: 'absolute',
        right: 150
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    },
    tabs: {
        textTransform: 'uppercase',
        fontWeight: 800,
        fontSize: 12
    },
    menu: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        marginTop: "2em",
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    }
    
}));

export default useStyles;

