import CustomDialog from "../../../../components/CustomDialog/CustomDialog";
import DriverForm from "../DriverForm/DriverForm";
import { Driver } from '../../../../interface/Driver';
import { Box, Typography } from "@material-ui/core";
import useStyles from "./useStyles";

interface Props {
    initValues: Driver
}

const UpdateDriver = ({ initValues }: Props): JSX.Element => {
    const { title } = useStyles();
    const handleSubmit = (inputs: Driver) => {
        console.log(inputs)
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