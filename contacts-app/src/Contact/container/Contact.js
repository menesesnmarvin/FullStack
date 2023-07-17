import { Paper } from '@mui/material'

import ContactList from '../components/ContactList'
import useContact from '../hooks/useContact'

const Contact = () => {

    const {
        contactListData,
        handleInsert,
        handleEdit,
        handleDelete,
        CfmAlert
    } = useContact()

    return (
        <> 
            <CfmAlert/>
            <Paper sx={{ margin: 'auto', width: '80%', overflow: 'hidden', marginTop: 10, background: "#F4FEFD" }}>
                <ContactList
                    contactListData={contactListData}
                    handleDelete={handleDelete}
                    handleInsert={handleInsert}
                    handleEdit={handleEdit}
                />
            </Paper>
        </>
    )
}

export default Contact