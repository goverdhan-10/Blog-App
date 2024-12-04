import React from 'react';

function Logo() {
  return (
    <div className="flex justify-center items-center">
      <img
        src="data:image/png;base64,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" // Add your logo URL here
        alt="Logo"
        className='h-12 w-12 rounded-full border-2 border-gray-600' // Circular shape and border
      />
    </div>
  );
}

export default Logo;