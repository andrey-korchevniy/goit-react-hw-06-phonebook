import React from "react";
import { ContactsTable } from "components/ContactsTable/ContactsTable";
import { getContactsList } from "redux/contacts";
import { useSelector } from "react-redux";

export const Contacts = () => {
    const contactForRender = useSelector(getContactsList);  // get contacts list for render

    if (contactForRender.length !== 0) {
        return (
            <ContactsTable contactForRender={contactForRender} />
        )
    } 
    else return (
        <h3> You don`t have any contacts </h3>
    )
}