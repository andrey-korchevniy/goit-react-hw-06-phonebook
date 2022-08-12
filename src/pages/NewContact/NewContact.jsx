import React from "react";
import * as yup from 'yup';
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/contacts";
import { nanoid } from 'nanoid';
import { SvgClear } from "images/Svg";
import { Link } from "react-router-dom";
import { NewContactForm } from "components/NewContactForm/NewContactForm";

const validationSchema = yup.object().shape({
    name: yup.string().min(3).required(),
    number: yup.number().required()
})

export const NewContact = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.items);

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
            <NewContactForm validationSchema={validationSchema} hundleSubmit={hundleSubmit} />
        </>
    );
}
