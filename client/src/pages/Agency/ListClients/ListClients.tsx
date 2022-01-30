import { useState, useEffect } from 'react';
import DataTable from "../../../components/DataTable/DataTable";
import { turkishClientColumn, engClientColumn } from '../../../utils/dictionary';
import { useLanguage } from '../../../context/useLanguageContext';
import { useSnackBar } from '../../../context/useSnackbarContext';
import { deleteClient, getClients } from '../../../helpers/APICalls/user';
import { format } from 'date-fns';
import { Client } from '../../../interface/Client';
import { useHistory } from 'react-router-dom';

const ListClients = (): JSX.Element => {
    const { language } = useLanguage();
    const [rows, setRows] = useState<Client []>([]);
    const { updateSnackBarMessage } = useSnackBar();
    const history = useHistory();

    useEffect(() => {
        getClients().then((data) => {
            if (data.error) {
                console.log(data.error);
                updateSnackBarMessage(data.error.message);
            } else if (data.success){
                data.success.clients.map((client, idx) => {
                    client.id = idx + 1;
                    const date = new Date(client.createdAt ? client.createdAt : Date.now());
                    client.createdAt = format(date, 'dd-MM-yyyy kk:mm')
                });
                setRows(data.success.clients);
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        });
    }, [history])

    const handleEditClick = () => {
        console.log('edit is hitted');
    };

    const handleCancelClick = (values: any) => {
        const id = values.row._id;
        deleteClient(id).then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error.message);
            } else if (data.success) {
                updateSnackBarMessage('Client has been deleted successfully!');
                setRows(rows.filter(row => row.id !== values.id));
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        });
    };

    const columns = language === 'tr' ? turkishClientColumn(handleEditClick, handleCancelClick) 
                                        : engClientColumn(handleEditClick, handleCancelClick);

    return (
        <>
            <DataTable rows={rows} columns={columns}/>
        </>
    )
};

export default ListClients;