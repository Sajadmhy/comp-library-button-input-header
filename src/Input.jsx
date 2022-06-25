import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

export default function Input({
  label,
  size,
  primary,
  value,
  onChange,
  type,
  placeholder,
  ...props
}) {
    const mode = primary ? 'storybook-input--primary' : 'storybook-input--secondary';
    return (
    <div className={['storybook-input', `storybook-input--${size}`, mode].join(' ')}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}