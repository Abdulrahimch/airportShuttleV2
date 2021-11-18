import useStyles from './useStyles';
import DataTable from "../../components/DataTable/DataTable";
import { Box } from '@material-ui/core';
import { GridColDef } from '@material-ui/data-grid';


const engColumns: GridColDef[] = [
    { 
      field: 'date', 
      headerName: 'Date', 
      width: 150 
    },
    { 
      field: 'time', 
      headerName: 'Time', 
      width: 150,
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 150,
    },
    {
      field: 'paid',
      headerName: 'Paid',
      width: 150,
    },
    {
      field: 'currency',
      headerName: 'Currency',
      width: 150,
    },
    {
      field: 'debt',
      headerName: 'Debt',
      width: 150,
    },
    {
      field: 'note',
      headerName: 'Note',
      width: 400,
    },
]

const turksihColumns: GridColDef[] = [
  { 
    field: 'date', 
    headerName: 'Tarih', 
    width: 150 
  },
  { 
    field: 'time', 
    headerName: 'saat', 
    width: 150,
  },
  {
    field: 'type',
    headerName: 'Tip',
    width: 150,
  },
  {
    field: 'paid',
    headerName: 'Ödenen para ',
    width: 150,
  },
  {
    field: 'currency',
    headerName: 'Parabirimi',
    width: 150,
  },
  {
    field: 'debt',
    headerName: 'Borç',
    width: 150,
  },
  {
    field: 'note',
    headerName: 'Note',
    width: 400,
  },
]


const rows = [
                {id: '123456', date: '2021-01-01', time: '10:00', type: 'cash', note: 'Abdulrahim paid me all his debt', paid: 50, currency: 'Euro', debt: 0 }
             ];

let lan = 'eng';

function ClientPayment(): JSX.Element {
    return (
        <Box>
            <DataTable rows={rows} columns={lan==='tr' ? turksihColumns : engColumns} />
        </Box>
    )
}

export default ClientPayment;