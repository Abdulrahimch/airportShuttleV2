import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    columnHeader: {
        backgroundColor: theme.palette.common.black,
        color: '#ffffff',
        fontWeight: 700,
        width: '100%',
      },
      root: {
        backgroundColor: 'primary',
        color: 'primary'
      },
      row: {
        backgroundColor: 'green',
      }
}));

export default useStyles;