import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    columnHeader: {
        backgroundColor: '#808080',
        color: '#000000',
        fontWeight: 900,
        fontSize: 16,
        width: '100%',
      },
      root: {
        backgroundColor: 'primary',
        color: 'primary',
        height: 700, 
        width: '100%'
      },
      row: {
        '&.reservation': {
          backgroundColor: '#CD5C5C',
        },
        '&.payment': {
          backgroundColor: '#7FFFD4',
        },
        '&.client': {
          // backgroundColor: '#9400D3',
        },
        '&.total': {
          backgroundColor: '#2F4F4F',
        },
        
      },

}));

export default useStyles;