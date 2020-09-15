import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { 
    Container, 
    Button,
    Title,
    Author,
    CourseLogo
} from './styles';

interface CourseProps {
    courseName: string;
    courseAuthor: string;
    coursePercentage: number;
}

const CourseProgress: React.FC<CourseProps> = ({
    courseName,
    courseAuthor,
    coursePercentage,
}) => {
  return (
      <Container>
            <CourseLogo>

            </CourseLogo>
            <div>
                <Title>{courseName}</Title>
                <Author>by {courseAuthor}</Author>
            </div>
            <CircularProgressbar 
                value={coursePercentage} 
                text={`${coursePercentage}%`} 
                className="progress"
                styles={ 
                    buildStyles({
                        textSize: '30px',
                        textColor: '#0C0B0B',
                        pathColor: "#0C0B0B",
                    }) 
                }
            />

          <Button>Continue</Button>
      </Container>
  );
}

export default CourseProgress;