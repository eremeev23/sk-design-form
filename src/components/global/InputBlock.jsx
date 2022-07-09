import React, { useState } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  position: relative;
  
  &.full-width {
    grid-column: 1/3;
  }
`


const Label = styled.label`
  position: absolute;
  padding: 0 5px;
  top: -1px;
  left: 10px;
  transform: translateY(-50%);
  font-size: 12px;
  color: #828282;
  background-color: #fff;
  transition: color .2s ease-in-out;
`

const Input = styled.input`
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
    
    & + label {
      color: #0086A8;
    }
  }
`


const InputBlock = ({ type, placeholder, label, id, required, fullWidth }) => {
  const [value, setValue] = useState('');

  console.log(value)

  const setLabel = () => {
    if (required) {
      return (
        <Label htmlFor={id} >
          { label } <sup>*</sup>
        </Label>
      )
    } else {
      return (
        <Label htmlFor={id} >
          { label }
        </Label>
      )
    }
  }

  return (
    <InputWrapper className={fullWidth ? 'full-width' : ''}>
      <Input
        onChange={e => setValue(e.target.value)}
        type={type}
        id={id}
        placeholder={placeholder}
      />
      { setLabel() }
    </InputWrapper>
  );
};

export default InputBlock;