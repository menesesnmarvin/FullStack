import axios from "axios"

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const columns = [
    { label: 'First Name', id: 'firstName' },
    { label: 'Last Name', id: 'lastName' },
    { label: 'Mobile Number', id: 'mobileNumber' },
    { label: 'Telephone Number', id: 'telephoneNumber' },
    { label: 'Email', id: 'email' },
    { label: 'Address', id: 'address' },
];

export const deleteContact = async (id) => {
    return await axios
        .delete(`${BASE_URL}Contact/${id}`)
}

export const getContact = async () => {
    return await axios
        .get(`${BASE_URL}Contact`)
}

export const insertContact = async (contact) => {
    return await axios
        .post(`${BASE_URL}Contact`, contact)    
}

export const updateContact = async (id, contact) => {
    return await axios
        .put(`${BASE_URL}Contact/${id}`, contact)    
}
