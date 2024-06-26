import classNames from 'classnames';
import React, { ChangeEvent, useState } from 'react';
import styles from './input.module.css';
import Icon from '../icon/icon';

interface IInputProps {
  id: string;
  label: string;
  name?: string;
  labelVisible?: boolean;
  icon?: 'letter' | 'lock' | 'show' | 'hide';
  email?: boolean;
  password?: boolean;
  placeholder?: string;
  readonly?: boolean;
  disabled?: boolean;
  value?: string;
  error?: { message: string };
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  [x: string]: any;
}

export default function Input({
  id,
  label,
  name = '',
  labelVisible,
  icon,
  email,
  password,
  placeholder = '',
  readOnly,
  disabled,
  value,
  error: errorProp,
  className = '',
  onChange,
  ...restProps
}: IInputProps) {
  const [inputValue, setInputValue] = useState(value ? value : '');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const checkType = () => {
    if (email) {
      return 'email';
    }

    if (password) {
      return isPasswordVisible ? 'text' : 'password';
    }

    return 'text';
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  const iconType = isPasswordVisible ? 'show' : 'hide';
  const iconLabel = `${isPasswordVisible ? 'Show' : 'Hide'} Password`;

  return (
    <div className={classNames(styles.formControl, className)}>
      <label
        htmlFor={id}
        className={classNames(styles.label, labelVisible || styles.labelHidden)}
      >
        {label}
      </label>

      <div
        className={classNames(
          styles.inputWrapper,
          errorProp && styles.inputWrapperError
        )}
      >
        {icon ? <Icon type={icon} /> : null}
        <input
          id={id}
          type={checkType()}
          name={name}
          className={classNames(styles.input)}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
          value={inputValue}
          onChange={handleChange}
          {...restProps}
        />

        {password ? (
          <button
            type='button'
            className={styles.button}
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            disabled={disabled}
          >
            <Icon type={iconType} alt={iconLabel} title={iconLabel} />
          </button>
        ) : null}
      </div>
      {errorProp && (
        <span role='alert' className={styles.error}>
          {errorProp.message}
        </span>
      )}
    </div>
  );
}
