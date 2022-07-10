import React, { useState } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';

const Label = styled.label`
  position: absolute;
  padding: 0 5px;
  top: -1px;
  left: 10px;
  transform: translateY(-50%);
  font-size: 12px;
  color: #828282;
  background-color: #fff;
  pointer-events: none;
  transition: color .2s ease-in-out;
  
  &.on-focus {
    color: #0086A8;
  }
`

const Input = styled.div`
  input {
    outline: none;
    width: 100%;
    padding: 18px 15px;
    font-size: 14px;
    border: 2px solid #E3E3E3;
    border-radius: 8px;
    transition: border-color .2s ease-in-out;

    &::placeholder {
      color: #CDCAD0;
    }

    &:focus {
      border-color: #0086A8;
    }
    
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px white inset;
    }
  }
`

const InputWrapper = styled.div`
  position: relative;
  
  &.full-width {
    grid-column: 1/3;
  }
  
  &.error {
    input {
      border-color: #EB5E55;
    }
    
    label {
      color: #EB5E55;
    }
  }
`

const Error = styled.p`
  display: none;
  margin-top: 8px;
  margin-left: 15px;
  font-size: 12px;
  color: #EB5E55;
  line-height: 100%;
  
  &.visible {
    display: block;
  }
`


const InputBlock = ({ type, placeholder, label, id, name, required, fullWidth, setValue, formValidate }) => {
  const [error, setError] = useState(false);
  const [focus, setFocus] = useState(false);

  const mask = type === "tel" ? "+7 (999) 999-99-99" : '';

  const updateValue = () => {
    setError(false);
    setFocus(true);
    formValidate();
  }

  const valueHandler = e => {
    const value = e.target.value;

    switch (name) {
      case 'user_name':
        if (value.trim().length >= 2) {
          setValue(value);
        } else {
          setValue(null);
          setError(true);
        }
        break;
      case 'user_email':
        if (/.+@.+\..+/i.test(value)) {
          setValue(value);
        } else {
          setValue(null);
          setError(true);
        }
        break;
      case 'user_tel':
        if (value.replaceAll('_', '').length === 18) {
          setValue(value);
        } else {
          setValue(null);
          setError(true);
        }
        break;
      case 'user_link':
        if (value.trim().length >= 3) {
          setValue(value);
        } else {
          setValue(null);
          setError(true);
        }
        break;
      default:
        return value;
    }
  }

  const setLabel = () => {
    if (required) {
      return (
        <>
          <Label className={focus ? 'on-focus' : ''} htmlFor={id}>
            {label} <sup>*</sup>
          </Label>
          <Error className={error ? 'visible' : ''}>
            Обязательное поле
          </Error>
        </>
      )
    } else {
      return (
        <Label className={focus ? 'on-focus' : ''} htmlFor={id}>
          {label}
        </Label>
      )
    }
  }

  return (
    <InputWrapper className={fullWidth ? 'full-width' : error ? 'error' : ''}>
      <Input>
        <InputMask
          onChange={e => valueHandler(e)}
          onFocus={updateValue}
          onBlur={() => setFocus(false)}
          onInput={updateValue}
          type={type}
          id={id}
          name={name}
          mask={mask}
          placeholder={placeholder}
        />
      </Input>

      { setLabel() }
    </InputWrapper>
  );
};

export default InputBlock;