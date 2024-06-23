export const Input = ({ type, placeholder, name }) => {
  return <input type={type} placeholder={placeholder} name={name} />;
};

export const InputPes = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  className,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
};