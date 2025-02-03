import React from "react";
import Header from "../header/header";
import CreateContact from "../createContact/createContact";
import ContactList from "../contactList/contactList";

function HomeComponents() {
    return <>
        <Header />
        <div className="flex">
            <ContactList />
            <CreateContact />
        </div>
    </>;
};

export default HomeComponents;