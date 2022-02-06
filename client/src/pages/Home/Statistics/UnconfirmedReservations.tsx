import DataTable from '../../../components/DataTable/DataTable';
import { agencyTurksihColumns, agencyEngColumns } from '../../../utils/dictionary';
import { useLanguage } from '../../../context/useLanguageContext';
import { Box } from '@material-ui/core/'

const UnconfirmedReservations = (): JSX.Element => {
    const rows = [{id: 1, date: '2022-01-01', status: 'payment', from: 'sultanahmet', to: 'ist Airport', flightNo: 'tk123', pax: 5}]
    const { language } = useLanguage();

    const columns = language === 'tr' ? agencyTurksihColumns() : agencyEngColumns();
    return (
        <>
            <Box style={{ marginTop: '2em' }}>
                <DataTable rows={rows} columns={columns}/>
            </Box>
        </>
    );
};

export default UnconfirmedReservations;