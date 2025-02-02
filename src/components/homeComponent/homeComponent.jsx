import React from "react";
import Header from "../header/header";
import CreateContact from "../createContact/createContact";
import ContactList from "../contactList/contactList";

function HomeComponents() {
    return <>
        <Header />
        <CreateContact />
        <ContactList />
    </>;
};

export default HomeComponents;