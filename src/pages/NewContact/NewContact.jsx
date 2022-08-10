import React from "react";
import { Button } from './NewContact.styled';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/store";
import { nanoid } from 'nanoid';
import { SvgClear } from "images/Svg";
import { Link } from "react-router-dom";
import { ContactInputLine } from "components/ContactInputLine/ContactInputLine";

const validationSchema = yup.object().shape({
    name: yup.string().min(3).required(),
    number: yup.number().required()
})

export const NewContact = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);

    const hundleSubmit = (values, { resetForm }) => {
        const { name, number } = values;

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
            <Formik
                initialValues={{ name: '', number: '' }}
                validationSchema = {validationSchema}
                onSubmit={hundleSubmit}
            >   
                <Form >
                    <Button type="submit" >Зберегти</Button>
                    <hr></hr>
                    <ContactInputLine
                        type='text'
                        name='name'
                        title="Ім'я може складатися тільки з букв, апострофа, дефісу та пробелів."
                        placeholder="Ім'я"
                    />
                    <ContactInputLine
                        type='tel'
                        name='number'
                        title="Номер телефонe повинен складатися з цифр і може мати пробіли, дефіси та знак +"
                        placeholder='Телефон'
                    />                    
                </Form>
            </Formik>
        </>
    );
}
