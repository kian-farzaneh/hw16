import React from "react";
import Header from "../header/header";
import CreateContact from "../createContact/createContact";
import ContactList from "../contactList/contactList";

function HomeComponents() {
    return <>
        <Header />
        <ContactList />
        <CreateContact />
    </>;
};

export default HomeComponents;