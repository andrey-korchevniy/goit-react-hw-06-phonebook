import { Formik, Form } from 'formik';
import { ContactInputLine } from 'components/ContactInputLine/ContactInputLine';
import { Button } from 'pages/NewContact/NewContact.styled';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    name: yup.string().min(3).required(),
    number: yup.number().required()
})

export const NewContactForm = ({ hundleSubmit }) => {
    return (
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
    )
}