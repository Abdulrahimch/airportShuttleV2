import { Button, CircularProgress } from '@material-ui/core';
import useStyles from './useStyles';

interface Props {
    text: string;
    isSubmitting: boolean;
}

function CustomButton({ text,  isSubmitting }: Props): JSX.Element {
    const classes = useStyles();

    return (
        <Button size="large" type="submit" variant="contained" color="primary" className={classes.submit}>
            {isSubmitting ? <CircularProgress className={classes.circularProgress} /> : text} 
        </Button>
                       
    )
}

export default CustomButton;