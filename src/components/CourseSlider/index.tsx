import React from 'react';

import { Container } from './styles';
import CourseProgress from '../CourseProgress';

const CourseSlider: React.FC = () => {
  return (
      <Container>
        <CourseProgress
          courseName="Spanish B2"
          courseAuthor="Alejandro Velazquez"
          coursePercentage={83}
        />
      </Container>
  );
}

export default CourseSlider;