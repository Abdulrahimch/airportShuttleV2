import { useState, useEffect } from 'react';
import DataTable from "../../../components/DataTable/DataTable";
import { turkishClientColumn, engClientColumn } from '../../../utils/dictionary';
import { useLanguage } from '../../../context/useLanguageContext';
import { useSnackBar } from '../../../context/useSnackbarContext';
import { deleteClient, getClients } from '../../../helpers/APICalls/user';
import { format } from 'date-fns';
import { Client } from '../../../interface/Client';
import { useHistory } from 'react-router-dom';
import CustomDialog from '../../../components/CustomDialog/CustomDialog';
import { Box, Typography } from '@material-ui/core';
import CustomButton from '../../../components/Button/CustomButton';
import useStyles from './useStyles';

const ListClients = (): JSX.Element => {
    const { mainBox, title } = useStyles();
    const { language } = useLanguage();
    const [rows, setRows] = useState<Client []>([]);
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [cellValue, setCellValue] = useState<Client>()

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
        setOpenDialog(true);
        setCellValue(values.row)
    };

    const onYesClick = () => {
        const id = cellValue?._id;
        deleteClient(id).then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error.message);
            } else if (data.success) {
                updateSnackBarMessage('Client has been deleted successfully!');
                setRows(rows.filter(row => row.id !== cellValue?.id));
                setOpenDialog(false);
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        });
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const dialog = language === 'tr' ? { 
                                            text: 'Bu müşteriyi silmek istediğinizden emin misiniz?',
                                            yes: 'Evet',
                                            no: 'Hayır ' 
                                        } : 
                                        {
                                            text: 'Are you sure you want to delete this client?',
                                            yes: 'Yes',
                                            no: 'No '
                                        }

    const columns = language === 'tr' ? turkishClientColumn(handleEditClick, handleCancelClick) 
                                        : engClientColumn(handleEditClick, handleCancelClick);

    return (
        <>
            <DataTable rows={rows} columns={columns} />
            <CustomDialog open={openDialog} onClose={handleCloseDialog}>
                <>
                    <Box display='flex' alignItems='center' flexDirection="column" className={mainBox}>
                            <Typography className={title}>
                                {dialog.text}
                            </Typography>
                            <Box justifyContent='center' m={2} pt={3}>
                                <CustomButton btnText={dialog.yes} style='yes' onClick={onYesClick} />
                                <CustomButton btnText={dialog.no} style='no' onClick={handleCloseDialog} />
                            </Box>
                    </Box>
                </>
            </CustomDialog>
        </>
    )
};

export default ListClients;