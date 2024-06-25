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
    className="w-full h-full rounded-2xl text-6xl"
  >
    {children}
  </select>
);


