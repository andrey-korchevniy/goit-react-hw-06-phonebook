import { Table, HeadRow, HeadCell } from "./ContactsTable.styled";
import { ContactRow } from "./ContactRow/ContactRow";
import PropTypes from 'prop-types';

export const ContactsTable = ({ contactForRender }) => {

    return (
        <Table>
            <HeadRow>
                <tr>
                    <HeadCell>Ім'я</HeadCell>
                    <HeadCell>Телефон</HeadCell>
                    <HeadCell>Дія</HeadCell>
                </tr>
            </HeadRow>
            <tbody>
                {contactForRender.map(contact => (
                    <ContactRow
                        key={contact.id}
                        id={contact.id}
                        name={contact.name}
                        number={contact.number}
                        isDeleted={contact.isDeleted}
                    />
                ))}
            </tbody>
        </Table>
    )
}

ContactsTable.propTypes = {
    contactForRender: PropTypes.array.isRequired,
}