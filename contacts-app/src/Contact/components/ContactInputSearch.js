import { useEffect } from 'react'
import { TextField, Stack } from '@mui/material'
import { Add } from '@mui/icons-material'

import useContactInputSearch from '../hooks/useContactInputSearch'
import Button from './shared/Button'

const ContactInputSearch = ({contactList, setContactList, setOpenPopup, setRowData, }) => {
    
    useEffect(() => {
        setContactList(contactList)
    },[contactList])
    
    const {
        searchTerm,
        handleSearchChange
    } = useContactInputSearch(contactList, setContactList)

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{margin: 5}}
            >
            <TextField
                label="Search Contact"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <Button
                sx={{background: 'linear-gradient(to right, #34d399, #22d3ee)', color: "#F4FEFD"}}
                fullWidth={false}
                text="Add New"
                startIcon={<Add />}
                onClick={() => { setOpenPopup(true); setRowData({}) }}
            />
        </Stack>
    )
}

export default ContactInputSearch