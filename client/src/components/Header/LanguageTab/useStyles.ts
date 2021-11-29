import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    menu: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        marginTop: "3em",
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    menuItem: {
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
        
    },
}));

export default useStyles;