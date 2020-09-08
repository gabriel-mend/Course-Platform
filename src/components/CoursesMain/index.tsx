import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Container, Title, TabsContainer, TabContainer } from './styles';
import CourseItem from '../CourseItem';

const CoursesMain: React.FC = () => {
  return (
        <Container>
            <Title>Courses</Title>
            <TabsContainer>
              <Tabs defaultFocus={false} >
                <TabList>
                  <Tab>All Courses</Tab>
                  <Tab>The Newest</Tab>
                  <Tab>Top Rated</Tab>
                  <Tab>Most Popular</Tab>
                </TabList>

                <TabPanel>
                  <TabContainer>
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                  </TabContainer>
                </TabPanel>
              </Tabs>
            </TabsContainer>
        </Container>
  );
}

export default CoursesMain;