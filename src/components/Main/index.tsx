import React from 'react';

import { Container } from './styles';
import HelloUser from '../HelloUser';
import CourseSlider from '../CourseSlider';
import CoursesMain from '../CoursesMain';

const Main: React.FC = () => {
  return (
      <Container>
          <HelloUser name="Gabriel" />
          <CourseSlider />
          <CoursesMain />
      </Container>
  );
}

export default Main;