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

const percentage = 83;

const CourseProgress: React.FC = () => {
  return (
      <Container>
            <CourseLogo>

            </CourseLogo>
            <div>
                <Title>Spanish</Title>
                <Author>by Alejandro Velazquez</Author>
            </div>
            <CircularProgressbar 
                value={percentage} 
                text={`${percentage}%`} 
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