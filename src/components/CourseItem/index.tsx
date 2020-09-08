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

const CourseItem: React.FC = () => {
  return (
        <Container>
            <CourseLogo>

            </CourseLogo>
            <div>
                <Title>Spanish</Title>
                <Author>by Alejandro Velazquez</Author>
            </div>
            <div>
                <img src={ClockIcon} alt=""/>
                <InfoText>6h 30min</InfoText>
            </div>
            <div>
                <img src={FlameIcon} alt=""/>
                <InfoText>4.9</InfoText>
            </div>

            <Button>View Course</Button>
        </Container>
  );
}

export default CourseItem;