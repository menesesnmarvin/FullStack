import { useState } from 'react'

const useContactInputSearch = (contactList, setContactList) => {
    const [searchTerm, setSearchTerm] = useState(''); 
    
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        const filteredData = contactList?.filter((item) => {
            const lowerSearchTerm = event.target.value.toLowerCase();
            return Object.values(item).some(
              (value) => String(value).toLowerCase().includes(lowerSearchTerm)
            );
        });
        setContactList(filteredData)
    };

    return {
        searchTerm,
        handleSearchChange
    }
}

export default useContactInputSearch