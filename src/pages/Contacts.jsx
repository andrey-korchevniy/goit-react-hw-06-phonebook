import React from "react";
import { ContactsTable } from "components/ContactsTable/ContactsTable";
import { GetListOfContacts } from "redux/contacts";

export const Contacts = () => {
    const contactForRender = GetListOfContacts(false);  // get contacts list for render

    if (contactForRender.length !== 0) {
        return (
            <ContactsTable contactForRender={contactForRender} />
        )
    } 
    else return (
        <h3> You don`t have any contacts </h3>
    )
}