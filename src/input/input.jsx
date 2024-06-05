import React from "react";
import "./InputStyled.css"

export const Input = ({ type, placeholder, name, register }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            {...register(name)}
        />
    );
};
