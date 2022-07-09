import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from "../../assets/imgs/logo.svg";
import { Link } from "react-router-dom";


const Wrapper = styled.div`
  max-width: 940px;
  margin-right: 60px;
`

const Title = styled.h1`
  margin: 40px 0;
  font-weight: 600;
  
`

const TextWrapper = styled.div`
  
`

const Text = styled.p`
  font-size: 14px;
  
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  
  a {
    color: #0086A8;
  }
`

const InfoBlock = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo />
      </Link>

      <Title>
        Оставьте заявку и станьте частью нашей команды
      </Title>

      <TextWrapper>
        <Text>
          Компания SK Design приглашает к взаимовыгодному сотрудничеству креативных дизайнеров, архитекторов и декораторов,
          дизайн-бюро и интерьерные студии — все, кто дизайн интерьера сделали своим призванием.
        </Text>

        <Text>
          Партнерство мы видим как доверительные отношения, основанные на честности реализации бизнес идей в сфере создания
          и продаж современной, качественной, удобной, функциональной и эксклюзивной мебели.
        </Text>

        <Text>
          Ознакомиться с проектами можете в нашем <Link to="/portfolio">портфолио</Link>.
          Если Вы оформляете интерьеры жилых или коммерческих помещений —
          мы с радостью поможем Вам: составим уникальные условия сотрудничества, предоставим 3D модели (уточняйте у менеджеров)
          и разработаем коммерческое предложение к Вашему проекту или изображениям.
        </Text>
      </TextWrapper>
    </Wrapper>
  );
};

export default InfoBlock;