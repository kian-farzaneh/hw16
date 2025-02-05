import React, { useState } from "react";
import Header from "../header/header";
import CreateContact from "../createContact/createContact";
import ContactList from "../contactList/contactList";
import DeleteModal from "../contactList/deleteModal/deleteModal";

function HomeComponents() {

    const [contactToEdit, setContactToEdit] = useState(null);
    const [refreshFlag, setRefreshFlag] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(null)

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const refreshContacts = () => {
        setRefreshFlag((prev) => !prev)
    }

    const clearContactToEdit = () => {
        setContactToEdit(null)
    }

    return <>

        <DeleteModal
            modalState={isModalOpen}
            closeModalBtn={closeModal}
            contactId={contactToDelete}
            onDeleteSuccess={refreshContacts}
        />

        <Header />

        <div className="flex">
            <ContactList
                setDelete={setContactToDelete}
                setEdit={setContactToEdit}
                refreshFlag={refreshFlag}
                openModalBtn={openModal}
            />
            <CreateContact
                setEdit={contactToEdit}
                refreshContacts={refreshContacts}
                clearContactToEdit={clearContactToEdit}
            />
        </div>
    </>;
};

export default HomeComponents;