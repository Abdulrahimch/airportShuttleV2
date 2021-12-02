import { useEffect, useState } from "react";
import { format } from 'date-fns';
import useStyles from "./useStyles";
import DataTable from '../../../components/DataTable/DataTable';
import { Box } from "@material-ui/core";
import { agencyTurksihColumns, agencyEngColumns } from '../../../utils/dictionary';
import { getReservations, deleteReservation, updateReservation } from '../../../helpers/APICalls/agencyReservation';
import { useLanguage } from '../../../context/useLanguageContext';
import { useSnackBar } from '../../../context/useSnackbarContext';

function ListAgencyReservations(): JSX.Element {
    const { language } = useLanguage();
    const { updateSnackBarMessage } = useSnackBar();
    const [rows, setRows] = useState<any>([]);

    const handleProcessedClick = (cellValues: any) => {
        const id = cellValues.row._id;
        const inputs = { status: 'processed' };
        updateReservation(inputs, id).then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error.message);
            } else if (data.success) {
                updateSnackBarMessage('reservation has been processed successfully!');
                setRows(rows.filter((row: any) => row.id !== cellValues.id));
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        })
    }

    const handleUnprocessedClick = (cellValues: any) => {
        const id = cellValues.row._id;
        const inputs = { status: 'unprocessed' };
        updateReservation(inputs, id).then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error.message);
            } else if (data.success) {
                updateSnackBarMessage('reservation has been unprocessed successfully!');
                setRows(rows.filter((row: any) => row.id !== cellValues.id));
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        })
        
    };
    console.log('rows are: ', rows)
    useEffect(() => {
        getReservations().then((data) => {
            if (data.error){
                console.log(data.error);
            } else if (data.success) {
                data.success.reservations.map((reservation, idx) => {
                    reservation.id = idx + 1;
                    const date = new Date(reservation.selectedDate)
                    reservation.date = format(date, "dd-MM-yyyy kk:mm");
                    reservation.property = reservation.client.property;
                });
                setRows(data.success.reservations);
            } else {
                console.log('External error');
            }

        })
    }, [])

    const columns = language === 'eng' ? agencyEngColumns(handleProcessedClick, handleUnprocessedClick) : agencyTurksihColumns(handleProcessedClick, handleUnprocessedClick);

    return (
        <Box>
            <DataTable rows={rows} columns={columns} />
        </Box>
    )
};

export default ListAgencyReservations;