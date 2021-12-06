import DataTable from '../../../components/DataTable/DataTable';
import { useLanguage } from '../../../context/useLanguageContext';
import CustomDialog from '../../../components/CustomDialog/CustomDialog';
import AddPayment from './AddPayment/AddPayment';
import { getClients } from '../../../helpers/APICalls/user';
import CloseIcon from '@material-ui/icons/Close';
import { agencyPaymentEngColumns, agencyPaymentTurkishColumns } from '../../../utils/dictionary';
import { useEffect, useState } from 'react';
import ListPayments from './ListPayments/ListPayments';
import { IconButton, AppBar, Toolbar, Button, Typography } from '@material-ui/core';

function AgencyPayments(): JSX.Element {
    const { language } = useLanguage();

    const [openAddPayment, setOpenAddPayment] = useState<boolean>(false);
    const [openAllPayments, setOpenAllPayments] = useState<boolean>(false);
    const [details, setDetails] = useState<boolean>(false);

    const [rows, setRows] = useState<any>([]);
    const [clientId, setClientId] = useState<string>('');

    const handleAddPaymentClick = (cellValues: any) => {
        setClientId(cellValues.row._id)
        setOpenAddPayment(true)
    };

    const handleAddPaymentClose = () => {
        setOpenAddPayment(false)
    }

    const handleAllPaymentsClick = (cellValues: any) => {
        setClientId(cellValues.row._id);
        setOpenAllPayments(true)
    };

    const handleAllPaymentsClose = () => {
        setOpenAllPayments(false)
    };

    const handleDetailsClick = (cellValues: any) => {
        setClientId(cellValues.row._id);
        setDetails(true)
    };

    const handleDetailsClose = () => {
        setDetails(false)
    };

    const columns = language === 'eng'  
                                    ? agencyPaymentEngColumns(handleAddPaymentClick, handleAllPaymentsClick, handleDetailsClick) 
                                    : agencyPaymentTurkishColumns(handleAddPaymentClick, handleAllPaymentsClick, handleDetailsClick);
    
    useEffect(() => {
        getClients().then((data) => {
            if (data.error) {
                console.log('data error')
            } else if (data.success) {
                data.success.clients.map((client, idx) => {
                    client.id = idx + 1;
                })
                setRows(data.success.clients);
            } else {
                console.log('external error')
            }
        });
    }, [openAddPayment, openAllPayments])
    
    return (
        <>
            <DataTable rows={rows} columns={columns} />
            <CustomDialog 
                open={openAddPayment} 
                onClose={handleAddPaymentClose}
                style={'addPayment'}
            >
                <AddPayment clientId={clientId}/>
            </CustomDialog>
            <CustomDialog 
                open={openAllPayments} 
                onClose={handleAllPaymentsClose}
                style={'addPayment'}
                isFullScreen={true}
            >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleAllPaymentsClose}
                        aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" component="div">
                            All Payments
                        </Typography>
                    </Toolbar>
                </AppBar>
                <ListPayments clientId={clientId}/>
            </CustomDialog>
        </>
        
    )
}

export default AgencyPayments;