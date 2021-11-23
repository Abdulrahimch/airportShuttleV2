import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
}));

export default useStyles;

