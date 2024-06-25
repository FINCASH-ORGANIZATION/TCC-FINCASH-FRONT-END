// inputFormShow.jsx
import React from "react";

export const Input = ({ type, placeholder, name, register }) => (
  <input
    type={type}
    placeholder={placeholder}
    {...register(name)}
  />
);

export const Select = ({ type, placeholder, name, onChange, register, children }) => (
  <select
    type={type}
    name={name}
    onChange={onChange}
    {...register(name)}
  >
    {children}
  </select>
);


