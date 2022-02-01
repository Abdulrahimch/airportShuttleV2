import { useEffect, useState } from "react";
import { format } from 'date-fns';
import DataTable from '../../../components/DataTable/DataTable';
import { Box } from "@material-ui/core";
import { agencyTurksihColumns, agencyEngColumns } from '../../../utils/dictionary';
import { getReservations, updateReservation } from '../../../helpers/APICalls/agencyReservation';
import { useLanguage } from '../../../context/useLanguageContext';
import { useSnackBar } from '../../../context/useSnackbarContext';
import CustomDialog from "../../../components/CustomDialog/CustomDialog";
import AssignDriver from "../Drivers/AssignDriver/AssignDriver";
import { Reservation } from '../../../interface/agencyReservation';

function ListAgencyReservations(): JSX.Element {
    const { language } = useLanguage();
    const { updateSnackBarMessage } = useSnackBar();
    const [rows, setRows] = useState<any>([]);
    const [open, setOpen] = useState<boolean>(false)
    const [useEffectTrigger, setUseEffectTrigger] = useState<boolean>(false);
    const [reservation, setReservation] = useState<Reservation>()

    const handleProcessedClick = (cellValues: any) => {
        const id = cellValues.row._id;
        const inputs = { status: 'processed' };
        updateReservation(inputs, id).then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error);
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
                updateSnackBarMessage(data.error);
            } else if (data.success) {
                updateSnackBarMessage('reservation has been unprocessed successfully!');
                setRows(rows.filter((row: any) => row.id !== cellValues.id));
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        });
    };

    const handleConfirmClick = (cellValues: any) => {
        setReservation(cellValues.row);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const invokeUseEffect = () => {
        setUseEffectTrigger(!useEffectTrigger)
    };

    useEffect(() => {
        getReservations().then((data) => {
            if (data.error){
                updateSnackBarMessage(data.error);
            } else if (data.success) {
                console.log(data.success)
                data.success.reservations.map((reservation, idx) => {
                    reservation.id = idx + 1;
                    const date = new Date(reservation.selectedDate)
                    reservation.date = format(date, "dd-MM-yyyy kk:mm");
                    reservation.property = reservation.client?.propertyName;
                });
                setRows(data.success.reservations);
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }

        });
        return () => {
            setRows([]);
        }
    }, [useEffectTrigger]);

    const columns = language === 'eng' ? agencyEngColumns(handleProcessedClick, handleUnprocessedClick, handleConfirmClick) 
                                       : agencyTurksihColumns(handleProcessedClick, handleUnprocessedClick, handleConfirmClick);

    return (
        <Box>
            <DataTable rows={rows} columns={columns} />
            <CustomDialog open={open} onClose={handleClose}>
                <AssignDriver reservation={reservation} invokeUseEffect={invokeUseEffect} handleClose={handleClose} />
            </CustomDialog>
        </Box>
    )
};

export default ListAgencyReservations;