import { SvgName, SvgTel } from "images/Svg";
import { Label, InputField, ErrorInput } from "./ContactInputLine.styled";
import PropTypes from 'prop-types';

// line 'Nane' or 'Phone' - depends of props
export const ContactInputLine = ({ type, name, title, placeholder }) => {
    return (
        <Label htmlFor='number'>
            {name === 'name' ? <SvgName /> : <SvgTel />}
            <InputField
                type={type}
                name={name}
                title={title}
                placeholder={placeholder}
                required
            />
            <ErrorInput name={name} component="div" />
        </Label>
    )
}

ContactInputLine.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}