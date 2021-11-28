import { useEffect, useState } from 'react';
import useStyles from './useStyles';
import { format } from 'date-fns';
import { Box } from '@material-ui/core';
import DataTable from '../../components/DataTable/DataTable';
import { engColumn, turksihColumns } from '../../utils/dictionary';
import { getReservations } from '../../helpers/APICalls/reservation';
import { deleteReservation } from '../../helpers/APICalls/reservation';
import { useSnackBar } from '../../context/useSnackbarContext';
import CustomDialog from '../../components/CustomDialog/CustomDialog';
import UpdateReservation from './UpdateReservation/UpdateReservation';
import { useHistory } from 'react-router-dom';

let lan = 'eng';

function ListReservations(): JSX.Element{
    const classes = useStyles();
    const history = useHistory();
    const { updateSnackBarMessage } = useSnackBar();

    const [rows, setRows] = useState<any>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [initValues, setInitValues] = useState( {
        type: 0,
        from: 0,
        to: 0,
        property: '',
        pax: 5,
        flightNo: '',
        driverNote: '',
        selectedDate: new Date(),
        timezone: 0,
        passengers: []
        });

    const handleDialogClose = () => {
        setOpen(false)
    };

    const handleCacelClick = (cellValues: any) => {
        const id = cellValues.row._id;
        deleteReservation(id).then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error.message);
            } else if (data.success) {
                updateSnackBarMessage('reservation deleted!');
                setRows(rows.filter((row: any) => row.id !== cellValues.id));
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        })
        
    };
    const handleEditClick = (cellValues: any) => {
        setInitValues(cellValues.row)
        setOpen(true)
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
                console.log('External error')
            }
        })
        return () => {
            setRows([]);
        }
    }, [history, open]);
    
    return (
        <Box className={classes.root}>
            <DataTable rows={rows} columns={columns} />
            <CustomDialog 
                open={open} 
                onClose={handleDialogClose}
                // eslint-disable-next-line react/style-prop-object
                style={'updateReservation'}
            >
                <UpdateReservation initValues={initValues} setOpen={setOpen} />
            </CustomDialog>
        </Box>
    )
}

export default ListReservations;