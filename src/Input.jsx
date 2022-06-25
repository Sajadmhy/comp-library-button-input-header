import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

export const Input = ({
  label,
  size,
  primary,
  value,
  onChange,
  type,
  placeholder,
  ...props
}) => {
    const mode = primary ? 'storybook-input--primary' : 'storybook-input--secondary';
    return (
    <div data-testid='input' className={['storybook-input', `storybook-input--${size}`, mode].join(' ')}>
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

Input.prototype = {
  label: PropTypes.string.isRequired,

  primary: PropTypes.bool,

  size: PropTypes.oneOf(['small', 'medium', 'large']),

  value: PropTypes.string,

  onChange: PropTypes.func,
}

Input.defaultProps = {
  primary: true,
  size: 'medium',
  value: '',
  onChange: undefined,
}