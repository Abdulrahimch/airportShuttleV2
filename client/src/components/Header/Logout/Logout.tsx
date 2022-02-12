import CustomButton from '../../Button/CustomButton';
import { useAuth } from '../../../context/useAuthContext';
import { useLanguage } from '../../../context/useLanguageContext';

const Logout = () => {
    const { logout } = useAuth();
    const { language } = useLanguage();

    const handleLogout = () => {
        logout();
    };
    
    return (
        <CustomButton style='logout' btnText={language === 'eng' ? 'logout' : 'Çıkış'} onClick={handleLogout}/>
    );
};

export default Logout;
