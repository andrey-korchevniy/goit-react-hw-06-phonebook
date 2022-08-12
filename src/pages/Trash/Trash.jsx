import React from "react";
import { useSelector } from "react-redux";
import { ContactsTable } from "components/ContactsTable/ContactsTable";
import { getContactsForRender } from "util/getContactsForRender";

export const Trash = () => {
    const contacts = useSelector(state => state.items);
    const filter = useSelector(state => state.filter);
    const trash = true;

    const contactForRender = getContactsForRender(contacts, filter, trash); // get contacts list for trash
   
    if (contactForRender.length > 0) {
        return (
            <ContactsTable contactForRender={contactForRender}/>
        )
    } 
    else return (
        <h3> You don`t have any deleted contacts </h3>
    )
}