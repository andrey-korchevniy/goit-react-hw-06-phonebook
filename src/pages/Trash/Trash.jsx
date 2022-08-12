import React from "react";
import { ContactsTable } from "components/ContactsTable/ContactsTable";
import { GetListOfContacts } from "redux/contacts";

export const Trash = () => {
    const contactForRender = GetListOfContacts(true); // get contacts list for trash
   
    if (contactForRender.length > 0) {
        return (
            <ContactsTable contactForRender={contactForRender}/>
        )
    } 
    else return (
        <h3> You don`t have any deleted contacts </h3>
    )
}