import { FilterForm, FilterField, InputBlock, FilterBtn, ClearFilterBtn } from "./FilterBar.styled";
import { Formik } from 'formik';
import { SvgSearch, SvgClear } from "images/Svg";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "redux/contacts";
import { getFilter } from "redux/contacts";

export const FilterBar = () => {

    const dispatch = useDispatch()
    const filterValue = useSelector(getFilter);

    const handleOnChange = (e) => {
        dispatch(setFilter(e.currentTarget.value))
    }

    const handleClearClick = () => {
        dispatch(setFilter(''))
    }

    return (
        <InputBlock>
            <Formik
                initialValues={{ filter: `${filterValue}` }}
            >
                <FilterForm>
                    <FilterBtn><SvgSearch /></FilterBtn>
                    <FilterField
                        type="text"
                        name="filter"
                        placeholder="Search contacts"
                        onChange={handleOnChange}
                        required
                        value={filterValue}
                        autoComplete="off"
                    />
                    <ClearFilterBtn type="clear" onClick={handleClearClick}><SvgClear /></ClearFilterBtn>
                </FilterForm>
            </Formik>
        </InputBlock>
        
    )
}