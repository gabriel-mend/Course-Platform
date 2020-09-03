import React from 'react';

import { Container } from './styles';
import HelloUser from '../HelloUser';

const Main: React.FC = () => {
  return (
      <Container>
          <HelloUser/>
      </Container>
  );
}

export default Main;