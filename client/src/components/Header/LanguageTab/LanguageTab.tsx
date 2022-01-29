import { Box, MenuItem, Tab, Tabs, Select, InputLabel, Menu } from "@material-ui/core";
import { SetStateAction, useState } from "react";
import useStyles from "./useStyles";
import { useLanguage } from '../../../context/useLanguageContext';
import { Language } from '../../../interface/Language';

function LanguageTab(): JSX.Element {
    const { updateLanguage } = useLanguage();
    const [value, setValue] = useState('eng');
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const { menu, menuItem } = useStyles();

    const handleClick = (e: any) => {
        setAnchorEl(e.currentTarget);
        setOpen(true);
    }

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    }


    const handleMenuItemClick = (lenguage: Language) => {
        updateLanguage(lenguage);
        handleClose();
    }

    return (
        <Box>
            <Tabs 
                value={value} 
                TabIndicatorProps={{
                style: {
                    display: "none",
                },
                }} 
            >
                    <Tab
                        aria-owns={anchorEl ? "simple-menu" : undefined}
                        aria-haspopup={anchorEl ? true : undefined}
                        onClick={(event: any) => handleClick(event)}
                        label="Language" 
                    />
            </Tabs>
            <Menu 
                    id="simple-menu"
                    anchorEl={anchorEl} 
                    open={open} 
                    onClose={handleClose}
                    classes={{paper: menu}}
                    MenuListProps={{onMouseLeave: handleClose}}
                    elevation={0}
                >
                    <MenuItem classes={{root: menuItem}}  onClick={() => { handleMenuItemClick('eng')}}>eng</MenuItem>
                    <MenuItem classes={{root: menuItem}}  onClick={() => { handleMenuItemClick('tr')}}>tr</MenuItem>
                </Menu>
        </Box>
    )
}

export default LanguageTab;