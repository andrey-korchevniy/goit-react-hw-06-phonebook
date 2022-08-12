import { Row, Cell, CellAmount, DeleteBtn, DeleteForeverBtn, CellAction } from './ContactRow.styled';
import PropTypes from 'prop-types';
import { SvgClear } from 'images/Svg';
import { useDispatch } from "react-redux";
import { deleteContact, deleteContactForever } from "redux/contacts";

export const ContactRow = ({ id, name, number, isDeleted }) => {
    const dispatch = useDispatch()

    const onDeleteContact = () => {
        dispatch(deleteContact(id))
    }

    const onDeleteForever = () => {
       dispatch(deleteContactForever(id));
    }
// rendering pages 'contacts' or 'trash'. In Trash - additionaly render buttun 'delete forever'
    return (
        <Row>
            <Cell>{name}</Cell>
            <CellAmount>{number}</CellAmount>
            <CellAction>
                <DeleteBtn onClick={onDeleteContact}><SvgClear /></DeleteBtn>
                {isDeleted ? <DeleteForeverBtn onClick={onDeleteForever}>Delete forever</DeleteForeverBtn> : <></>}
            </CellAction>
        </Row>
    )
}

ContactRow.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    isDeleted: PropTypes.bool.isRequired,
}