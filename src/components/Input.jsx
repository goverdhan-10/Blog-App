import React, { useId } from 'react';

const Input = React.forwardRef(function Input(
  { label, type = 'text', classname = '', errorMessage, ...props }, ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1 text-gray-700" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-4 py-3 rounded-lg bg-white text-black border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
          transition-all duration-200 ease-in-out w-full ${classname}`}
        ref={ref}
        {...props}
        id={id}
      />
      {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
    </div>
  );
});

export default Input;
