import React from 'react';
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const Container = styled.div`
  min-height: 100vh;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
`

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Container>
  );
}

export default App;
