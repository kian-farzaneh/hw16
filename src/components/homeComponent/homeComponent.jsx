import React, { useState } from "react";
import Header from "../header/header";
import CreateContact from "../createContact/createContact";
import ContactList from "../contactList/contactList";
import DeleteModal from "../contactList/deleteModal/deleteModal";

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
        <DeleteModal />
        <Header />
        <div className="flex">
            <ContactList setEdit={setContactToEdit} refreshFlag={refreshFlag}/>
            <CreateContact setEdit={contactToEdit} refreshContacts={refreshContacts} clearContactToEdit={clearContactToEdit}/>
        </div>
    </>;
};

export default HomeComponents;