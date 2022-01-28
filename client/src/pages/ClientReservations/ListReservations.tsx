import { useEffect, useState } from 'react';
import useStyles from './useStyles';
import { format } from 'date-fns';
import { Box, Tab } from '@material-ui/core';
import DataTable from '../../components/DataTable/DataTable';
import { engColumn, turksihColumns } from '../../utils/dictionary';
import { getReservations } from '../../helpers/APICalls/reservation';
import { deleteReservation } from '../../helpers/APICalls/reservation';
import { useSnackBar } from '../../context/useSnackbarContext';
import CustomDialog from '../../components/CustomDialog/CustomDialog';
import UpdateReservation from './UpdateReservation/UpdateReservation';
import { useHistory } from 'react-router-dom';
import { useLanguage } from '../../context/useLanguageContext';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { turkishTabs, engTabs } from '../../utils/dictionary';

function ListReservations(): JSX.Element{
    const { root } = useStyles();
    const history = useHistory();
    const { language } = useLanguage();
    const { updateSnackBarMessage } = useSnackBar();

    const [confirmedReservations, setConfirmedReservations] = useState<any>([]);
    const [unConfirmedReservations, setUnConfirmedReservations] = useState<any>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState('1');
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
                setConfirmedReservations(confirmedReservations.filter((row: any) => row.id !== cellValues.id));
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        })
        
    };
    const handleEditClick = (cellValues: any) => {
        setInitValues(cellValues.row)
        setOpen(true)
    };

    const handleChange = (event:  any, newValue: string) => {
        setValue(newValue);
    };

    const columns = language === 'tr' ? turksihColumns(handleEditClick, handleCacelClick): engColumn(handleEditClick, handleCacelClick);
    const tabs = language === 'tr' ? turkishTabs : engTabs

    useEffect(() => {
        getReservations().then((data) => {
            if (data.error){
                console.log(data.error)
            } else if (data.success) {
                console.log(data.success)
                data.success.reservations.confirmedReservations.map((reservation, idx) => {
                    reservation.id = idx + 1;
                    const date = new Date(reservation.selectedDate)
                    reservation.date = format(date, "dd-MM-yyyy kk:mm")
                });
                setConfirmedReservations(data.success.reservations.confirmedReservations);
                data.success.reservations.unConfirmedReservations.map((reservation, idx) => {
                    reservation.id = idx + 1;
                    const date = new Date(reservation.selectedDate)
                    reservation.date = format(date, "dd-MM-yyyy kk:mm")
                });
                setUnConfirmedReservations(data.success.reservations.unConfirmedReservations);
            } else {
                console.log('External error')
            }
        })
        return () => {
            setConfirmedReservations([]);
            setUnConfirmedReservations([]);
        }
    }, [history, open]);

    
    
    return (
        // <>
        // <Box className={root}>
        //     <DataTable rows={rows} columns={columns} />
        //     <CustomDialog 
        //         open={open} 
        //         onClose={handleDialogClose}
        //         // eslint-disable-next-line react/style-prop-object
        //         style={'updateReservation'}
        //     >
        //         <UpdateReservation initValues={initValues} setOpen={setOpen} />
        //     </CustomDialog>
        // </Box>
        // </>
        <>
            <Box sx={{ width: '100%' }} className={root}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            {tabs.map(({label, value}, idx) => (
                                <Tab key={idx} label={label} value={value} />
                            ))}
                        </TabList>
                    </Box>
                    <TabPanel value="1" style={{ width: '100%' }}><DataTable rows={confirmedReservations} columns={columns} /></TabPanel>
                    <TabPanel value="2" style={{ width: '100%' }}><DataTable rows={unConfirmedReservations} columns={columns} /></TabPanel>
                </TabContext>
            </Box>
        </>
    )
}

export default ListReservations;