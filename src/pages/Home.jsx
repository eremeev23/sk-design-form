import React from 'react';
import InfoBlock from "../components/main-page/InfoBlock";
import FormBlock from "../components/main-page/FormBlock";
import styled from 'styled-components';

const Main = styled.main`
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Home = () => {
  return (
    <Main>
      <InfoBlock />
      <FormBlock />
    </Main>
  );
};

export default Home;