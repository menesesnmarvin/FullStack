import React, { useState } from 'react'
import { TableBody, TableRow, TableCell } from '@mui/material';
import { IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

import useContactTable from './useContactTable';
import ContactInputSearch from '../contact-input-search/ContactInputSearch';
import Popup from '../../shared/components/Popup';
import ContactForm from '../contact-form/ContactForm';
import { columns } from '../../shared/services/contactService';

const ContactList = ({contactListData, handleDelete, handleInsert, handleEdit}) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [rowData, setRowData] = useState({}); 
  const [contactList, setContactList] = useState();
  
  const {
    TblContainer,
    TblHead,
    TblPagination,
    page,
    rowsPerPage
  } = useContactTable(contactListData, columns)

  return (
    <>
      <ContactInputSearch 
        contactList={contactListData}
        setContactList={setContactList}
        setOpenPopup={setOpenPopup}
        setRowData={setRowData}
      />
      <TblContainer>
          <TblHead/>
          <TableBody>
            {contactList
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow key={row.id} hover>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id}>
                          {value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                        <IconButton
                            sx={{color: "#22d3ee"}}
                            aria-label="Edit"
                            onClick={() => {
                              setOpenPopup(true); 
                              setRowData(row);
                            }}
                        >
                            <Edit />
                        </IconButton>
                        <IconButton
                            sx={{color: "#22d3ee"}}
                            aria-label="Delete"
                            onClick={() => handleDelete(row.id)}
                        >
                            <Delete />
                        </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
      </TblContainer>
      <TblPagination/>
      <Popup
        title="Contact Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
      <ContactForm 
        recordForEdit={rowData} 
        setOpenPopup={setOpenPopup}
        handleInsert={handleInsert}
        handleEdit={handleEdit}
      />
      </Popup>
    </>
  )
}

export default ContactList