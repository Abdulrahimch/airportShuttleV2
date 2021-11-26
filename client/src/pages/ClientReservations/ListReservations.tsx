import useStyles from './useStyles';
import { Box, Button } from '@material-ui/core';
import DataTable from '../../components/DataTable/DataTable';
import { clientReservationsDictionary } from '../../utils/dictionary';

const { engColumns, turksihColumns } = clientReservationsDictionary;

const rows = [
                { id: 1, name: 'Abdulrahim shiha', date: '2021-09-01', pickUp: 5, flightNumber: 'tk123', from: '2021-05-05', to: '2021-06-06', pax: 4, note: 'payment in the hotel', status: <Button>Click Me</Button>  }
             ]

let lan = 'eng';

function ListReservations(): JSX.Element{
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <DataTable rows={rows} columns={lan === 'tr' ? turksihColumns : engColumns} />
        </Box>
    )
}

export default ListReservations;