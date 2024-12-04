import React, { useId } from 'react';

function Select({ options, label, className, ...props }, ref) {
  const id = useId();

  return (
    <div className="w-full space-y-2">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-4 py-2 rounded-lg bg-white text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${className}`}
      >
        {options?.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
