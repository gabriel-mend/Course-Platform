import React from 'react';

import { Container } from './styles';
import HelloUser from '../HelloUser';
import CourseSlider from '../CourseSlider';

const Main: React.FC = () => {
  return (
      <Container>
          <HelloUser />
          <CourseSlider />
      </Container>
  );
}

export default Main;