import { useState } from 'react'; 
import { Box } from "@material-ui/core";
import CustomDialog from "../../../../components/CustomDialog/CustomDialog";
import DataTable from "../../../../components/DataTable/DataTable";
import { useLanguage } from "../../../../context/useLanguageContext";
import { engDriverColumn, turksihDriverColumns } from "../../../../utils/dictionary";
import UpdateDriver from "../UpdateDriver/UpdateDriver";
import { Driver } from '../../../../interface/Driver';


const ListDrivers = (): JSX.Element => {
    const initRows = [{id: 1, firstName: 'abood', lastName: 'shiha', email: 'abood@gmail.com', carNumber: '656'} ]

    const [open, setOpen] = useState<boolean>(false);
    const [rows, setRows] = useState<Driver []>(initRows);
    const [initValues, setInitValues] = useState<any>();

    const { language } = useLanguage();

    const handleEditClick = (values: any) => {
        setInitValues(values.row)
        setOpen(true);
    }
    const handleCancelClick = (values: any) => {
        setRows(rows.filter(row => row.id !== values.id));
    }

    const handleClose = () => {
        setOpen(false)
    };

    const columns = language === 'eng' ? engDriverColumn(handleEditClick, handleCancelClick) : turksihDriverColumns(handleEditClick, handleCancelClick)
    return (
        <>
            <Box>
                <DataTable rows={rows} columns={columns} />
                <CustomDialog open={open} onClose={handleClose} style="updateReservation" >
                    <UpdateDriver initValues={initValues}/>
                </CustomDialog>
            </Box>
        </>
    )
};

export default ListDrivers;