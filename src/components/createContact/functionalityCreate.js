

export const addContact = async (name,phoneNumber,relation,email) => {
    const response = await fetch('https://676a57fa863eaa5ac0de0a39.mockapi.io/api/v1/contacts',{
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

