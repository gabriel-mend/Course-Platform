import React from 'react';

import { Container } from './styles';
import CourseProgress from '../CourseProgress';

const CourseSlider: React.FC = () => {
  return (
      <Container>
        <CourseProgress />
      </Container>
  );
}

export default CourseSlider;