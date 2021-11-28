import { useEffect, useState } from 'react';
import useStyles from './useStyles';
import { format } from 'date-fns';
import { Box } from '@material-ui/core';
import DataTable from '../../components/DataTable/DataTable';
import { engColumn, turksihColumns } from '../../utils/dictionary';
import { getReservations } from '../../helpers/APICalls/reservation';
import { deleteReservation } from '../../helpers/APICalls/reservation';
import { useSnackBar } from '../../context/useSnackbarContext';

let lan = 'eng';

function ListReservations(): JSX.Element{
    const classes = useStyles();
    const [rows, setRows] = useState<any>([]);
    const { updateSnackBarMessage } = useSnackBar();

    const handleCacelClick = (cellValues: any) => {
        const id = cellValues.row._id;
        deleteReservation(id).then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error.message);
            } else if (data.success) {
                updateSnackBarMessage('reservation cenceled!');
                setRows(rows.filter((row: any) => row.id !== cellValues.id));
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        })
        
    };
    const handleEditClick = () => {
        console.log('Updating your reservation')
    }

    const columns = lan === 'tr' ? turksihColumns(handleEditClick, handleCacelClick): engColumn(handleEditClick, handleCacelClick);
    useEffect(() => {
        getReservations().then((data) => {
            if (data.error){
                console.log(data.error)
            } else if (data.success) {
                data.success.reservations.map((reservation, idx) => {
                    reservation.id = idx + 1;
                    const date = new Date(reservation.selectedDate)
                    reservation.date = format(date, "dd-MM-yyyy kk:mm")
                });
                setRows(data.success.reservations);
            } else {
                console.log('Externam error')
            }
        })
        return () => {
            setRows([]);
        }
    }, []);

    return (
        <Box className={classes.root}>
            <DataTable rows={rows} columns={columns} />
        </Box>
    )
}

export default ListReservations;