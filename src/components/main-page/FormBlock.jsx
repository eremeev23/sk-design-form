import React from 'react';
import styled from 'styled-components';
import InputBlock from "../global/InputBlock";

const Form = styled.form`
  padding: 40px 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  box-shadow: 0 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: 8px;
`

const FormBlock = () => {
  return (
    <Form>
      <InputBlock
        type='text'
        placeholder='Иван'
        label='Ваше имя'
        id='user_name'
        required={true}
        fullWidth={false}
      />

      <InputBlock
        type='tel'
        placeholder='+7 (000) 000-00-00'
        label='Номер телефона'
        id='user_tel'
        required={true}
        fullWidth={false}
      />

      <InputBlock
        type='email'
        placeholder='example@skdesign.ru'
        label='E-mail'
        id='user_email'
        required={true}
        fullWidth={false}
      />

      <InputBlock
        type='text'
        placeholder='instagram.com/skdesign'
        label='Ссылка на профиль'
        id='user_link'
        required={true}
        fullWidth={false}
      />

      <InputBlock
        type='text'
        placeholder='SK Design'
        label='Название организации/студии'
        id='user_link'
        required={false}
        fullWidth={true}
      />
    </Form>
  );
};

export default FormBlock;