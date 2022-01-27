import CustomDialog from "../../../../components/CustomDialog/CustomDialog";
import DriverForm from "../DriverForm/DriverForm";
import { Driver } from '../../../../interface/Driver';
import { Box, Typography } from "@material-ui/core";
import useStyles from "./useStyles";
import { updateDriver } from "../../../../helpers/APICalls/driver";
import { useSnackBar } from '../../../../context/useSnackbarContext';

interface Props {
    initValues: Driver;
    setDialogUpdate: any;
    dialogUpdate: boolean;
}

const UpdateDriver = ({ initValues, setDialogUpdate, dialogUpdate }: Props): JSX.Element => {
    const { title } = useStyles();
    const { updateSnackBarMessage } = useSnackBar();
    const handleSubmit = (inputs: Driver) => {
        const id = initValues._id;
        updateDriver(inputs, id).then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error);
            }else if (data.success) {
                updateSnackBarMessage('Driver has been updated successfully!');
                setDialogUpdate(!dialogUpdate)
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        })
    }
    return (
        <>
            <Box>
                <Typography className={title}>
                    update driver
                </Typography>
                <DriverForm handleSubmit={handleSubmit} initValues={initValues} />
            </Box>
        </>
        
    )
};

export default UpdateDriver;
