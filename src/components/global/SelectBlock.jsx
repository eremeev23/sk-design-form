import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Chevron } from "../../assets/imgs/chevron.svg";

const SelectWrapper = styled.div`
  grid-column: 1/3;
`

const Select = styled.select`
  display: none;
`

const PseudoSelect = styled.div`
  width: 100%;
  position: relative;
`

const PseudoSelectValue = styled.button`
  cursor: pointer;
  width: 100%;
  min-height: 60px;
  padding: 18px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  border: 2px solid #E3E3E3;
  border-radius: 8px;
  transition: border-color .2s ease-in-out;
  
  span {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    transition: top .2s ease-in-out, font-size .2s ease-in-out, color .2s ease-in-out;
  }
  
  svg {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    transition: transform .2s ease-in-out;
  }

  &.active {
    border-color: #0086A8;
    
    span {
      padding: 0 5px;
      width: fit-content;
      top: -1px;
      left: 10px;
      font-size: 12px;
      color: #0086A8;
      background-color: #fff;
      pointer-events: none;
    }
    
    svg {
      transform: translateY(-50%) rotate(180deg);
    }
  }
  
  &.selected {
    border-color: #e3e3e3;

    span {
      position: absolute;
      padding: 0 5px;
      width: fit-content;
      top: -1px;
      left: 10px;
      transform: translateY(-50%);
      font-size: 12px;
      color: #828282;
      background-color: #fff;
      pointer-events: none;
      transition: color .2s ease-in-out;
    }

    svg {
      transform: translateY(-50%) rotate(0);
    }
  }
`

const PseudoSelectList = styled.ul`
  position: absolute;
  list-style: none;
  background-color: #fff;
  border: 2px solid #E3E3E3;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(53, 50, 56, 0.14);
  z-index: 2;
`

const PseudoSelectOption = styled.li`
  cursor: pointer;
  padding: 5px 15px;
  font-size: 14px;
  
  &:not(:last-child) {
    border-bottom: 2px solid #E3E3E3;
  }
`


const SelectBlock = ({ options, placeholder, required, setValue, formValidate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const setPlaceholder = () => {
    if (selectedOption) {
      return selectedOption
    } else {
      return ''
    }
  }

  const isRequired = () => {
    if (required) {
      return (
        <span>{ placeholder }<sup>*</sup></span>
      )
    } else {
      return (
        <span>{ placeholder }</span>
      )
    }
  }

  const openHandler = e => {
    e.preventDefault()
    setIsOpen(!isOpen)
  };

  const optionHandler = option => {
    setSelectedOption(option.name || option);
    setValue(option.name || option);
    setIsOpen(false);
    formValidate();
  }

  return (
    <SelectWrapper>
      <Select value={selectedOption} />
      <PseudoSelect>
        <PseudoSelectValue
          onClick={e => openHandler(e)}
          className={isOpen ? 'active' : selectedOption ? 'selected' : null}
        >
          { isRequired() }
          { setPlaceholder() }
          <Chevron />
        </PseudoSelectValue>
        {isOpen && (
          <PseudoSelectList>
            {options.map((option, i) => (
                <PseudoSelectOption
                  onClick={() => optionHandler(option)}
                  key={i}
                >
                  { option.name || option }
                </PseudoSelectOption>
            ))}
          </PseudoSelectList>
        )}
      </PseudoSelect>
    </SelectWrapper>
  );
};

export default SelectBlock;