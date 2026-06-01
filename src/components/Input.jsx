import React from 'react';

const Input = ({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  autoComplete,
  error,
  required,
  leftIcon,
  rightElement,
  className = '',
}) => {
  const hasError = Boolean(error);

  const labelBase = 'block text-sm font-medium text-gray-700 mb-1';
  const inputBase = `w-full border rounded-xl px-3 py-2.5 text-sm text-gray-700 placeholder-gray-300 outline-none transition-colors bg-white ${rightElement ? 'pr-10' : ''
    }`;

  return (
    <fieldset className={`mb-4 border-none p-0 ${className}`}>
      {label && (
        <label htmlFor={id} className={labelBase}>
          {label}
          {required && <span className='text-red-500 ml-0.5'>*</span>}
        </label>
      )}
      <div className='relative flex items-center'>
        {leftIcon && (
          <span className='absolute left-3 text-gray-400 pointer-events-none'>
            {leftIcon}
          </span>
        )}
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={`${inputBase}
              ${leftIcon ? 'pl-9' : 'px-3'} 
              ${rightElement ? 'pr-10' : ''} 
              ${error
              ? 'border-red-400 focus:ring-red-200'
              : 'border-gray-300 focus:ring-blue-200'
            }`}
        />
        {rightElement && (
          <div className='absolute right-3'>
            {rightElement}
          </div>
        )}
      </div>
      {/* Опціонально: вивід тексту помилки */}
      {typeof error === 'string' && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </fieldset>
  );
};

export default Input;