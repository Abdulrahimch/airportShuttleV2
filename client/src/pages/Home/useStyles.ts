import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundColor: '#D3D3D3',
        
    },
    card: {
        maxWidth: 345,
        maxHeight: '35vh',
        borderRadius: 25,
        border: '2px solid',
        minWidth: 325,
        position: 'relative',
        marginBottom: 25
    },
    itemContaienr: {
        position: 'relative'
    }
}));

export default useStyles;