import { Box } from "@material-ui/core";
import { ContactlessOutlined } from "@material-ui/icons";
import DataTable from "../../../../components/DataTable/DataTable";
import { useLanguage } from "../../../../context/useLanguageContext";
import { engDriverColumn, turksihDriverColumns } from "../../../../utils/dictionary";


const ListDrivers = (): JSX.Element => {

    const { language } = useLanguage();

    const handleEditClick = () => {
        console.log('Edit has been clicked')
    }
    const handleCancelClick = () => {
        console.log('cancel has been clicked')
    }
    const columns = language === 'eng' ? engDriverColumn(handleEditClick, handleCancelClick) : turksihDriverColumns(handleEditClick, handleCancelClick)
    const rows = [{id: 1, name: 'abood', email: 'abood@gmail.com', carNumber: '656'} ]
    return (
        <>
            <Box>
                <DataTable rows={rows} columns={columns} />
            </Box>
        </>
    )
};

export default ListDrivers;