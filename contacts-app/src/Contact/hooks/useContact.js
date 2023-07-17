import { useQuery } from 'react-query'

import { getContact, insertContact, updateContact, deleteContact } from '../services/contactService'
import ConfirmationAlert from '../components/shared/ConfirmationAlert'
import { useState } from 'react'

const useContact = () => {
    const [alertDetails, setAlertDetails] = useState({
      openAlert: false,
      severity: "success",
      alertContent: "",
      background:"#34d399"
    })

    const { data: contactListData , refetch} = useQuery(
      ['contact-list'],
      () => getContact(),
      {
        refetchOnWindowFocus: false,
          select: (data) => {  
            return data.data
        },
      }
    )

    const postContact = async (contact) => {
      try{
        await insertContact(contact)
        refetch()
        setAlertDetails({
          ...alertDetails,
          openAlert: true,
          severity: "success",
          alertContent: "Successfully added contact",     
          background: "#34d399"
        })
      }
      catch(error){
        console.error('Error inserting data:', error.message);
        setAlertDetails({
          ...alertDetails,
          openAlert: true,
          severity: "error",
          alertContent: `Error updating data: ${error.message}`,
          background: "red"     
        })
      }
    }
    
    const putContact = async (id, contact) => {
      try{
        await updateContact(id, contact)
        refetch()
        setAlertDetails({
          ...alertDetails,
          openAlert: true,
          severity: "success",
          alertContent: "Successfully updated contact",     
          background: "#34d399"
        })
      }
      catch(error){
        console.error('Error updating data:', error.message);
        setAlertDetails({
          ...alertDetails,
          openAlert: true,
          severity: "error",
          alertContent: `Error updating data: ${error.message}`,
          background: "red"     
        })
      }
    }
    
    const handleDelete = async (id) => {
      try {
        await deleteContact(id)
        refetch()
        setAlertDetails({
          ...alertDetails,
          openAlert: true,
          severity: "success",
          alertContent: "Successfully deleted contact",     
          background: "#34d399"
        })
      }
      catch(error) {
        console.error('Error deleting data:', error.message);
        setAlertDetails({
          ...alertDetails,
          openAlert: true,
          severity: "error",
          alertContent: `Error updating data: ${error.message}`,
          background: "red"     
        })
      }
    }
    
    const CfmAlert = () => {
      return (
        <ConfirmationAlert 
          alertDetails={alertDetails}
          setAlertDetails={setAlertDetails}
        />
      )
    }

    return {
      contactListData,
      postContact,
      putContact,
      handleDelete,
      CfmAlert    
    }
}

export default useContact