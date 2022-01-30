import DataTable from "../../../components/DataTable/DataTable";
import { turkishClientColumn, engClientColumn } from '../../../utils/dictionary';
import { useLanguage } from '../../../context/useLanguageContext';

const ListClients = (): JSX.Element => {
    const { language } = useLanguage();

    const handleEditClick = () => {
        console.log('edit is hitted');
    };

    const handleCancelClick = () => {
        console.log('cancel is hitted');
    };

    const rows = [{id: 1, propertyName: 'dilhayat', businessType: 'hotel', email: 'dilhayat@gmail.com', address: 'dultanahmet', createdAt: '2019-01-01'}]

    const columns = language === 'tr' ? turkishClientColumn(handleEditClick, handleCancelClick) 
                                        : engClientColumn(handleEditClick, handleCancelClick);

    return (
        <>
            <DataTable rows={rows} columns={columns}/>
        </>
    )
};

export default ListClients;