import "./InputStyled.css"
import PropTypes from 'prop-types';


//Input do Login
export const Input = ({ type, placeholder, name, className, register }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={className}
            {...register(name)}
        />
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    register: PropTypes.func.isRequired,
};
