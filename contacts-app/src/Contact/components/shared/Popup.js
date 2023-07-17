import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material'
import { Close } from '@mui/icons-material';

import ActionButton from './ActionButton';

export default function Popup(props) {

    const { title, children, openPopup, setOpenPopup } = props;

    return (
        <Dialog open={openPopup} maxWidth="sm">
            <DialogTitle sx={{paddingRight: "0px", color: "#22d3ee"}}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <ActionButton
                        onClick={()=>{setOpenPopup(false)}}>
                            <Close/>
                    </ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}
