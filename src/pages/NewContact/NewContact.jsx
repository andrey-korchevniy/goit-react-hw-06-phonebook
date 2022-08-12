import React from "react";
import { Button } from './NewContact.styled';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/contacts";
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
            <Formik
                initialValues={{ name: '', number: '' }}
                validationSchema = {validationSchema}
                onSubmit={hundleSubmit}
            >   
                <Form >
                    <Button type="submit" >Save</Button>
                    <hr></hr>
                    <ContactInputLine
                        type='text'
                        name='name'
                        title="Name cam contain only letters, numbers and defis"
                        placeholder="Name"
                    />
                    <ContactInputLine
                        type='tel'
                        name='number'
                        title="Phone number must contain only numbers, spases, defis and +"
                        placeholder='Phone number'
                    />                    
                </Form>
            </Formik>
        </>
    );
}
