import { Button } from '@material-ui/core';
import useStyles from './useStyles';
import clsx from 'clsx';

interface Props {
    btnText: string;
    isSubmitBtn?: boolean;
    style?: string;
    cssStyle?: React.CSSProperties;
    onClick?: () => void
    
}

function CustomButton({ btnText,  style, onClick, isSubmitBtn }: Props): JSX.Element {
    const { button } = useStyles();
    const btnStyle = clsx(button, style)

    return (
        <Button
        className={btnStyle}
        onClick={onClick}
        type="submit"
        >
            {btnText}
        </Button>
                       
    )
}

export default CustomButton;