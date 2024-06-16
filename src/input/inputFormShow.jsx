export const InputFormShow = ({ type, placeholder, name, register }) => {
  return <input type={type} placeholder={placeholder} {...register(name)} />;
};
