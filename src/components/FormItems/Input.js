import React from "react";
const Input = React.forwardRef((props, ref) => {
  const {
    label,
    error = null,
    value,
    id,
    onChange,
    onBlur,
    name,
    type,
    className,
  } = props;
  return (
    <div className="flex flex-col">
      {label && (
        <label className="block text-xs  tracking-wide mr-3 py-1 text-left font-bold  px-2 text-gray-500">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          ref={ref}
          id={id}
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          className="w-full block border border-gray-300  text-gray-700 py-4 px-2 rounded-md leading-tight focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:ring-1"
        />
        {error && <span className="text-xs text-red-600">{error}</span>}
      </div>
    </div>
  );
});

export default Input;
