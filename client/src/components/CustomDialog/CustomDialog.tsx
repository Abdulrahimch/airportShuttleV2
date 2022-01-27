import Dialog from '@material-ui/core/Dialog';
import clsx from 'clsx';
import useStyles from './useStyles';

interface Props {
    children: React.ReactNode;
    open: boolean;
    style?: string;
    cssStyle?: React.CSSProperties;
    isFullScreen?: boolean
    onClose: () => void;
    setDialogUpdate?: any;
    dialogUpdate?: boolean
  }

const CustomDialog = ({ open, setDialogUpdate, dialogUpdate, onClose, style, cssStyle, children, isFullScreen }: Props): JSX.Element => {
    const { dialog } = useStyles();
    const dialogStyle = clsx(dialog, style);
    return (
        <Dialog 
            open={open} 
            fullScreen={isFullScreen}
            onClose={onClose}
            className={dialogStyle}
            style={cssStyle}
        >
            {children}
        </Dialog>
    )
};

export default CustomDialog;