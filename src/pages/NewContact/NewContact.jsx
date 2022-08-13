import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/contacts";
import { nanoid } from 'nanoid';
import { SvgClear } from "images/Svg";
import { Link } from "react-router-dom";
import { NewContactForm } from "components/NewContactForm/NewContactForm";
import { getContacts } from "redux/contacts";

export const NewContact = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const hundleSubmit = (values, { resetForm }) => {
        const { name, number } = values;
        // check if there are any such contacts
        if (contacts.map(el => el = el.name).includes(name) ||
            contacts.map(el => el = el.number).includes(number)) {
            alert(`Цей контакт вже є у книзі`)
        }
        else {
            dispatch(addContact({ id: nanoid(), name: name, number: number, isDeleted: false }));
            resetForm()
        }       
    };

    return (
        <>
            <Link to={'/'}> <SvgClear /></Link>
            <NewContactForm hundleSubmit={hundleSubmit} />
        </>
    );
}
