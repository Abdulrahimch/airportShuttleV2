import DataTable from '../../../components/DataTable/DataTable';
import { useLanguage } from '../../../context/useLanguageContext';
import { agencyPaymentEngColumns, agencyPaymentTurkishColumns } from '../../../utils/dictionary';

function AgencyPayments(): JSX.Element {
    const { language } = useLanguage();
    const handleAddPaymentClick = () => {
        console.log('add payment has been clicked')
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
    const rows = [{ id: 1, property: 'dilhayat kalfa', email: 'info@dilhayatkalfahotel.com', debt: 100 }]
    return (
        <DataTable rows={rows} columns={columns} />
    )
}

export default AgencyPayments;