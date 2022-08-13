import React from "react";
import { ContactsTable } from "components/ContactsTable/ContactsTable";
import { getTrashList } from "redux/contacts";
import { useSelector } from "react-redux";

export const Trash = () => {
    const contactForRender = useSelector(getTrashList); // get contacts list for trash
   
    if (contactForRender.length > 0) {
        return (
            <ContactsTable contactForRender={contactForRender}/>
        )
    } 
    else return (
        <h3> You don`t have any deleted contacts </h3>
    )
}