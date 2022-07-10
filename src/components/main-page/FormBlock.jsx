import React, {useEffect, useState} from 'react';
import styled, { keyframes } from 'styled-components';
import InputBlock from "../global/InputBlock";
import SelectBlock from "../global/SelectBlock";
import { useGetCitiesQuery, useGetSourcesQuery } from "../../store/reducers/jsonsApi";
import { useAddUserMutation } from "../../store/reducers/userApi";
import { ReactComponent as Chevron } from "../../assets/imgs/chevron.svg";

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  
  25% {
    transform: rotate(360deg);
  }

  26% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(360deg);
  }

  51% {
    transform: rotate(0);
  }

  75% {
    transform: rotate(360deg);
  }

  76% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`

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
  
  &.loading {
    position: relative;
    padding: 13px 0 12px;
    
    span {
      display: inline-block;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 2px solid #fff;
      border-bottom: none;
      border-right: none;
      animation: ${rotate} 2s linear;
    }
  }
`

const FormBlock = () => {
  // store
  const cities = useGetCitiesQuery().data;
  const sources = useGetSourcesQuery().data;
  const [addUser, {isLoading}] = useAddUserMutation();

  // component state
  const [isExtraFields, setIsExtraFields] = useState(false),
    [filledForm, setFilledForm] = useState(false),
    [name, setName] = useState(null),
    [tel, setTel] = useState(null),
    [email, setEmail] = useState(null),
    [link, setLink] = useState(null),
    [city, setCity] = useState(null),
    [company, setCompany] = useState(null),
    [recipient, setRecipient] = useState(null),
    [source, setSource] = useState(null),
    [loading, setLoading] = useState(false),
    [success, setSuccess] = useState(false);

  const fd = new FormData();

  useEffect(() => {
    formValidate()
  })

  const openExtraFields = e => {
    e.preventDefault();
    setIsExtraFields(!isExtraFields);
  }

  const formValidate= () => {
    if (name && tel && email && link && city) {
      setFilledForm(true);
    } else {
      setFilledForm(false);
    }
  }

  const handleAddUser = async (body) => {
    console.log(JSON.stringify(body));
    setName(null);
    setTel(null);
    setEmail(null);
    setLink(null);
    setCity(null);
    setCompany(null);
    setRecipient(null);
    setSource(null);
    setSuccess(true);
    setIsExtraFields(false)
    await addUser(body).unwrap();
  }

  const handleForm = e => {
    e.preventDefault();
    const user = {
      user_name: name,
      user_tel: tel,
      user_email: email,
      user_link: link,
      user_city: city,
      company,
      recipient,
      source,
    }
    /*
      Вариант с формдатой. По условиям после отправки формы нужно вывести боди запроса в формате JSON,
      в таком случае формдата становится пустым объектом
    */
    fd.append('user_name', name.toString());
    fd.append('user_tel', tel.toString());
    fd.append('user_email', email.toString());
    fd.append('user_link', link.toString());
    fd.append('user_city', city.toString());

    company && fd.append('company_name', company.toString());
    recipient && fd.append('recipient', recipient.toString());
    source && fd.append('source', source.toString());

    setLoading(true);

    setTimeout(() => {
      handleAddUser(user)
        .then(response => {
          console.log(response.status)
        })
        .catch(error => console.log(error.status))
      setLoading(false);
    }, 2000)

  }

  return (
    <Form onSubmit={e => handleForm(e)}>
      <InputBlock
        type='text'
        placeholder='Иван'
        label='Ваше имя'
        id='user_name'
        name='user_name'
        required={true}
        fullWidth={false}
        success={success}
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
        success={success}
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
        success={success}
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
        success={success}
        setValue={setLink}
        formValidate={formValidate}
      />

      <SelectBlock
        options={cities}
        placeholder={'Выберите город'}
        id='user_city'
        name='user_city'
        required={true}
        success={success}
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
        value={company}
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
            success={success}
            setValue={setRecipient}
            formValidate={formValidate}
          />

          <SelectBlock
            options={sources}
            placeholder={'Выберите город'}
            id='user_source'
            name='user_source'
            required={false}
            success={success}
            setValue={setSource}
            formValidate={formValidate}
          />
        </>
      )}

      <SubmitButton
        type='submit'
        disabled={!filledForm}
        className={loading || isLoading ? 'loading' : ''}
      >
        { loading || isLoading ? (<span></span>) : 'Отправить заявку'}
      </SubmitButton>
    </Form>
  );
};

export default FormBlock;