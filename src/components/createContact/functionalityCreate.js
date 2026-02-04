export const addContact = async (name,phoneNumber,relation,email) => {
    const response = await fetch('https://6983540a9c3efeb892a560b7.mockapi.io/contacts',{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name,
            phoneNumber,
            relation,
            email
        })
    })
}

