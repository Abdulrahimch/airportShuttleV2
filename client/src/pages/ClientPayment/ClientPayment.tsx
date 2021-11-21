import DataTable from "../../components/DataTable/DataTable";
import { Box } from '@material-ui/core';
import { clientPaymentDictionary } from '../../utils/dictionary';

const { engColumns,  turksihColumns } = clientPaymentDictionary;

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