import DataTable from "../../components/DataTable/DataTable";
import { Box } from '@material-ui/core';
import { clientPaymentDictionary } from '../../utils/dictionary';
import { useLanguage } from "../../context/useLanguageContext";
import { getmyPayments } from "../../helpers/APICalls/agencyPayment";
import { useSnackBar } from "../../context/useSnackbarContext";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns'; 

const { engColumns,  turksihColumns } = clientPaymentDictionary;

function ClientPayment(): JSX.Element {
    const [rows, setRows] = useState<[]>([])
    const { language } = useLanguage();
    const { updateSnackBarMessage } = useSnackBar();
    const history = useHistory();

    useEffect(() => {
        getmyPayments().then((data) => {
            if (data.error){
                updateSnackBarMessage(data.error);
            } else if (data.success){
                data.success.payment.map((item: any, idx: number) => {
                    item.id = idx +1;
                    const date = new Date(item.createdAt);
                    item.createdAt = format(date, 'dd-MM-yyyy kk:mm')
                });
                setRows(data.success.payment);
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        })
    }, [history])
    return (
        <Box>
            <DataTable rows={rows} columns={language === 'tr' ? turksihColumns : engColumns} />
        </Box>
    )
}

export default ClientPayment;