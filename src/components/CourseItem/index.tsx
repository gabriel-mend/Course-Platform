import React from 'react';

import { 
    Container, 
    Button,
    Title,
    Author,
    CourseLogo,
    InfoText
} from './styles';

import ClockIcon from '../../styles/assets/icons/clock-icon.svg';
import FlameIcon from '../../styles/assets/icons/flame-icon.svg';

interface CourseProps {
    courseName: string;
    courseAuthor: string;
    courseDuration: string;
    courseRating: number;
}

const CourseItem: React.FC<CourseProps> = ({
    courseName,
    courseAuthor,
    courseDuration,
    courseRating
}) => {
  return (
        <Container>
            <CourseLogo>

            </CourseLogo>
            <div>
                <Title>{courseName}</Title>
                <Author>by {courseAuthor}</Author>
            </div>
            <div>
                <img src={ClockIcon} alt=""/>
                <InfoText>{courseDuration}</InfoText>
            </div>
            <div>
                <img src={FlameIcon} alt=""/>
                <InfoText>{courseRating}</InfoText>
            </div>

            <Button>View Course</Button>
        </Container>
  );
}

export default CourseItem;