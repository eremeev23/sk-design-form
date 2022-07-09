import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from "../assets/imgs/logo.svg";
import { Link } from "react-router-dom";

const Main = styled.main`
  a {
    display: block;
  }
  
  .back-button {
    width: fit-content;
    padding: 15px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    border: 2px solid #353238;
    background-color: #353238;
    transition: background-color .2s ease-in-out, border-color .2s ease-in-out, color .2s ease-in-out;
    
    &:hover {
      background-color: #fff;
      border-color: #353238;
      color: #353238;
    }
  }
`

const Text = styled.p`
  margin: 30px 0;
  font-weight: 600;
  font-size: 20px;
`

const Home = () => {
  return (
    <Main>
      <Link to="/">
        <Logo />
      </Link>
      <Text>
        Страница портфолио компании
      </Text>

      <Link className='back-button' to="/">
        На главную
      </Link>
    </Main>
  );
};

export default Home;