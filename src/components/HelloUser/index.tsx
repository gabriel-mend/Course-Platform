import React from 'react';

import { Container, UserName, WellcomeMessage, UserImgContainer  } from './styles';
import UserImg from '../../styles/assets/images/Illustration.svg';

const HelloUser: React.FC = () => {
  return (
      <Container>
          <UserName>Hello Gabriel!</UserName>
          <WellcomeMessage>It’s good to see you again.</WellcomeMessage>
          <UserImgContainer>
            <img src={UserImg} alt="user"/>
          </UserImgContainer>
      </Container>
  );
}

export default HelloUser;