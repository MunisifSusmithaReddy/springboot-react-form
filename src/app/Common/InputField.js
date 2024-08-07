import React from 'react';

const Input = ({type, label, onInputChange, value, id, name, errorInfo}) => {
  return (
    <div className="p-5" >
    <div className="font-bold">{label}<span className="text-red-500">*</span></div>
    <input
      type={type}
      label={label}
      onChange={onInputChange}
      value={value}
      id={id}
      name={name}
      className="rounded-3xl h-10 pl-2"
    />
    <div className="text-red-500 text-sm">{errorInfo[name]?.message}</div>
    </div>
  );
}

export default Input;
