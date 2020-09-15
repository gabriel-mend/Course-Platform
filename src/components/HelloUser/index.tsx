import React from 'react';

import { Container, UserName, WellcomeMessage, UserImgContainer  } from './styles';
import UserImg from '../../styles/assets/images/Illustration.svg';
interface UserProps {
  name: string;
}
const HelloUser: React.FC<UserProps> = ({ name }) => {
  return (
      <Container>
          <UserName>Hello {name}!</UserName>
          <WellcomeMessage>It’s good to see you again.</WellcomeMessage>
          <UserImgContainer>
            <img src={UserImg} alt="user"/>
          </UserImgContainer>
      </Container>
  );
}

export default HelloUser;