import useStyles from './useStyles';
import { Box } from '@material-ui/core';
import DataTable from '../../components/DataTable/DataTable';
import { GridColDef } from '@material-ui/data-grid';

const engColumns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
    },
    { 
      field: 'date', 
      headerName: 'Date', 
      width: 150 
    },
    { 
      field: 'pickUp', 
      headerName: 'Pick-up', 
      width: 150,
    },
    {
      field: 'flightNumber',
      headerName: 'Flight No',
      width: 150,
    },
    {
      field: 'from',
      headerName: 'From',
      width: 150,
    },
    {
      field: 'to',
      headerName: 'To',
      width: 150,
    },
    {
      field: 'pax',
      headerName: 'Pax',
      width: 120,
    },
    {
      field: 'note',
      headerName: 'Note/Hotel',
      width: 150,
    },
    {
      field: 'payment',
      headerName: 'Payment',
      width: 150,
    },
    {
      field: 'car',
      headerName: 'Car',
      width: 120,
    },
  ]

const TurksihColumns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Isim',
      width: 150,
    },
    { 
      field: 'date', 
      headerName: 'Tarih', 
      width: 150 
    },
    { 
      field: 'pickUp', 
      headerName: 'Pick-up', 
      width: 150,
    },
    {
      field: 'flightNumber',
      headerName: 'Uçuş No ',
      width: 150,
    },
    {
      field: 'from',
      headerName: 'Nerden',
      width: 150,
    },
    {
      field: 'to',
      headerName: 'Nereye',
      width: 150,
    },
    {
      field: 'pax',
      headerName: 'Pax',
      width: 120,
    },
    {
      field: 'note',
      headerName: 'Note/Hotel',
      width: 150,
    },
    {
      field: 'payment',
      headerName: 'Ödeme',
      width: 150,
    },
    {
      field: 'car',
      headerName: 'Araç',
      width: 120,
    },
]

const rows = [
                { id: 1, name: 'Abdulrahim shiha', date: '2021-09-01', pickUp: 5, flightNumber: 'tk123', from: '2021-05-05', to: '2021-06-06', pax: 4, note: 'payment in the hotel'  }
             ]

let lan = 'eng';

function ClientReservations(): JSX.Element{
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <DataTable rows={rows} columns={lan === 'tr' ? TurksihColumns : engColumns} />
        </Box>
    )
}

export default ClientReservations;