import DataTable from '../../../components/DataTable/DataTable';
import { useLanguage } from '../../../context/useLanguageContext';
import CustomDialog from '../../../components/CustomDialog/CustomDialog';
import AddPayment from './AddPayment/AddPayment';
import { getClients } from '../../../helpers/APICalls/user';

import { agencyPaymentEngColumns, agencyPaymentTurkishColumns } from '../../../utils/dictionary';
import { useEffect, useState } from 'react';

function AgencyPayments(): JSX.Element {
    const { language } = useLanguage();
    const [open, setOpen] = useState<boolean>(false);
    const [rows, setRows] = useState<any>([]);

    const handleDialogClose = () => {
        setOpen(false)
    }
    const handleAddPaymentClick = () => {
        console.log('add payment has been clicked')
        setOpen(true)
    };

    const handleAllPaymentsClick = () => {
        console.log('all payment has been clicked')
    };

    const handleDetailsClick = () => {
        console.log('Details  has been clicked')
    };

    const columns = language === 'eng'  
                                    ? agencyPaymentEngColumns(handleAddPaymentClick, handleAllPaymentsClick, handleDetailsClick) 
                                    : agencyPaymentTurkishColumns(handleAddPaymentClick, handleAllPaymentsClick, handleDetailsClick);
    // const rows = [{ id: 1, property: 'dilhayat kalfa', email: 'info@dilhayatkalfahotel.com', debt: 100 }]
    
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
    }, [])
    
    return (
        <>
            <DataTable rows={rows} columns={columns} />
            <CustomDialog 
                open={open} 
                onClose={handleDialogClose}
                style={'addPayment'}
            >
                <AddPayment />
            </CustomDialog>
        </>
        
    )
}

export default AgencyPayments;