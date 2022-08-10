import React from "react";
import { useSelector } from "react-redux";
import { ContactsTable } from "components/ContactsTable/ContactsTable";

export const Contacts = () => {
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);

    // useEffect(() => { JSON.parse(localStorage.getItem("contacts")) }, [])

    const contactForRender = contacts.length ? contacts.filter(({ name, number, isDeleted }) => ((name.includes(filter) || number.includes(filter)) && !isDeleted)) : [];

    if (contactForRender.length !== 0) {
        return (
            <ContactsTable contactForRender={contactForRender} />
        )
    } 
    else return (
        <h3> You don`t have any contacts </h3>
    )
}