import cross from 'images/cross.png';
import { Title, AddContactBtn } from './AddNewContactButton.styled';

export const AddNewContactButton = () => {
    return (
        <AddContactBtn to={'/newcontact'}>
            <img src={cross} alt="cross" width='25px' height='25px' />
            <Title>Новий контакт</Title>
        </AddContactBtn>
    )
}