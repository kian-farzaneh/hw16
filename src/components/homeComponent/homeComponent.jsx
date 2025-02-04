import React, { useState } from "react";
import Header from "../header/header";
import CreateContact from "../createContact/createContact";
import ContactList from "../contactList/contactList";

function HomeComponents() {

    const [contactToEdit,setContactToEdit] = useState(null);
    const [refreshFlag,setRefreshFlag] = useState(false)

    const refreshContacts = () => {
        setRefreshFlag((prev) => !prev)
    }

    const clearContactToEdit = () => {
        setContactToEdit(null)
    }

    return <>
        <Header />
        <div className="flex">
            <ContactList setContactToEdit={setContactToEdit} refreshFlag={refreshFlag}/>
            <CreateContact contactToEdit={contactToEdit} refreshContacts={refreshContacts} clearContactToEdit={clearContactToEdit}/>
        </div>
    </>;
};

export default HomeComponents;