export let contacts = null

export async function getContacts() {
    const response = await fetch('https://676a57fa863eaa5ac0de0a39.mockapi.io/api/v1/contacts')
    const result = await response.json()
    contacts = result
            
}

export async function updateContacts(id,name,phoneNumber,relation,email) {
    const response = await fetch(`https://676a57fa863eaa5ac0de0a39.mockapi.io/api/v1/contacts/${id}`,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            phoneNumber,
            relation,
            email
        })
    })
    const result = await response.json()
    return result 
};

// updateContacts(17,"گرگعلی غلامی","09022124314","دوست","gorgali@gmail.com")

export async function deleteContact(id) {
    const response = await fetch(`https://676a57fa863eaa5ac0de0a39.mockapi.io/api/v1/contacts/${id}`,{
        method: 'DELETE',
        headers:{
            "Content-Type" : "application/json"
        }
    })
    const result = await response.json()
    return result
};


export function handleDelete(event,contactList,setContactList) {
    const contactId = event.target.dataset.id;

    deleteContact(contactId)
        .then(() => {
            const updatedList = contactList.filter(item => item.id !== contactId)
            setContactList(updatedList)
        })
        .catch(err => console.error('Error deleting contact :', err))
};