import React, {useState} from 'react';
import styled from 'styled-components';
import InputBlock from "../global/InputBlock";
import SelectBlock from "../global/SelectBlock";
import { useGetCitiesQuery, useGetSourcesQuery } from "../../store/reducers/jsonsApi";
import { ReactComponent as Chevron } from "../../assets/imgs/chevron.svg";

const Form = styled.form`
  min-width: 35%;
  max-width: 320px;
  padding: 40px 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  box-shadow: 0 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: 8px;
`

const ExtraFieldsButton = styled.button`
  cursor: pointer;
  grid-column: 1/3;
  justify-self: flex-start;
  width: fit-content;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 150%;
  
  svg {
    margin-left: 8px;
    transition: transform .2s ease-in-out;
  }
  
  &.opened {
    svg {
      transform: rotate(180deg);
    }
  }
`

const SubmitButton = styled.button`
  cursor: pointer;
  grid-column: 1/3;
  padding: 18px 0;
  color: #fff;
  font-weight: 600;
  background-color: #0086A8;
  border-radius: 8px;
  transition: background-color .2s ease-in-out, color .2s ease-in-out;
  
  &:hover {
    background-color: #007693;
  }
  
  &:active {
    background-color: #00657E;
  }
  
  &:disabled {
    cursor: not-allowed;
    color: #828282;
    background-color: #E3E3E3;
  }
`

const FormBlock = () => {
  const cities = useGetCitiesQuery().data;
  const sources = useGetSourcesQuery().data;
  const [isExtraFields, setIsExtraFields] = useState(false);
  const [filledForm, setFilledForm] = useState(false);
  const [name, setName] = useState(null);
  const [tel, setTel] = useState(null);
  const [email, setEmail] = useState(null);
  const [link, setLink] = useState(null);
  const [city, setCity] = useState(null);
  const [company, setCompany] = useState(null);
  const [recipient, setRecipient] = useState(null);
  const [source, setSource] = useState(null);

  const fd = new FormData();

  const openExtraFields = e => {
    e.preventDefault();
    setIsExtraFields(!isExtraFields)
  }

  const formValidate= () => {
    if (name && tel && email && link && city) {
      setFilledForm(true)
    } else {
      setFilledForm(false)
    }
  }

  return (
    <Form>
      <InputBlock
        type='text'
        placeholder='Иван'
        label='Ваше имя'
        id='user_name'
        name='user_name'
        required={true}
        fullWidth={false}
        setValue={setName}
        formValidate={formValidate}
      />

      <InputBlock
        type='tel'
        placeholder='+7 (000) 000-00-00'
        label='Номер телефона'
        id='user_tel'
        name='user_tel'
        required={true}
        fullWidth={false}
        setValue={setTel}
        formValidate={formValidate}
      />

      <InputBlock
        type='email'
        placeholder='example@skdesign.ru'
        label='E-mail'
        id='user_email'
        name='user_email'
        required={true}
        fullWidth={false}
        setValue={setEmail}
        formValidate={formValidate}
      />

      <InputBlock
        type='text'
        placeholder='instagram.com/skdesign'
        label='Ссылка на профиль'
        id='user_link'
        name='user_link'
        required={true}
        fullWidth={false}
        setValue={setLink}
        formValidate={formValidate}
      />

      <SelectBlock
        options={cities}
        placeholder={'Выберите город'}
        id='user_city'
        name='user_city'
        required={true}
        setValue={setCity}
        formValidate={formValidate}
      />

      <InputBlock
        type='text'
        placeholder='SK Design'
        label='Название организации/студии'
        id='user_link'
        required={false}
        fullWidth={true}
        setValue={setCompany}
        formValidate={formValidate}
      />

      <ExtraFieldsButton
        className={isExtraFields ? 'opened' : ''}
        onClick={e => openExtraFields(e)}
      >
        Показать дополнительные поля
        <Chevron />
      </ExtraFieldsButton>

      {isExtraFields && (
        <>
          <InputBlock
            type='text'
            placeholder='ФИО'
            label='Получатель'
            id='user_link'
            required={false}
            fullWidth={true}
            setValue={setRecipient}
            formValidate={formValidate}
          />

          <SelectBlock
            options={sources}
            placeholder={'Выберите город'}
            id='user_source'
            name='user_source'
            required={false}
            setValue={setSource}
            formValidate={formValidate}
          />
        </>
      )}

      <SubmitButton
        type='submit'
        disabled={!filledForm}
      >
        Отправить заявку
      </SubmitButton>
    </Form>
  );
};

export default FormBlock;