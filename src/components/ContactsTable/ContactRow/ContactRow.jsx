import { Row, Cell, CellAmount, DeleteBtn, DeleteForeverBtn, CellAction } from './ContactRow.styled';
import PropTypes from 'prop-types';
import { SvgClear } from 'images/Svg';
import { useDispatch } from "react-redux";
import { deleteContact, deleteContactForever } from "redux/store";

export const ContactRow = ({ id, name, number, isDeleted }) => {
    const dispatch = useDispatch()

    const onDeleteContact = () => {
        dispatch(deleteContact(id))
    }

    const onDeleteForever = () => {
       dispatch(deleteContactForever(id));
    }

    return (
        <Row>
            <Cell>{name}</Cell>
            <CellAmount>{number}</CellAmount>
            <CellAction>
                <DeleteBtn onClick={onDeleteContact}><SvgClear /></DeleteBtn>
                {isDeleted ? <DeleteForeverBtn onClick={onDeleteForever}>Видалити назавжди</DeleteForeverBtn> : <></>}
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