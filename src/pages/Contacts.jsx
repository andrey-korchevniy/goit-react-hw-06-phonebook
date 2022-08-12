import React from "react";
import { useSelector } from "react-redux";
import { ContactsTable } from "components/ContactsTable/ContactsTable";
import { getContactsForRender } from "util/getContactsForRender";

export const Contacts = () => {
    const contacts = useSelector(state => state.items);
    const filter = useSelector(state => state.filter);

    const contactForRender = getContactsForRender(contacts, filter);  // get contacts list for render

    if (contactForRender.length !== 0) {
        return (
            <ContactsTable contactForRender={contactForRender} />
        )
    } 
    else return (
        <h3> You don`t have any contacts </h3>
    )
}