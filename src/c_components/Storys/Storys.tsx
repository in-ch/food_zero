import React from 'react';
import styled from 'styled-components/native';
import {nomalizes} from '@utills/constants';
import Story from './Story';
import {Text} from 'react-native';
const Container = styled.View`
  width: 100%;
  height: ${nomalizes[70]}px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: ${nomalizes[9]}px;
  margin-bottom: ${nomalizes[9]}px;
`;
const MainStory = styled.View`
  width: ${nomalizes[50]}px;
  height: ${nomalizes[70]}px;
`;
const Profile = styled.View`
  background-color: #a0a0a0;
  border-radius: ${nomalizes[25]}px;
  width: ${nomalizes[50]}px;
  height: ${nomalizes[50]}px;
`;
const NameContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin-top: ${nomalizes[5]}px;
`;
const Storys = () => {
  return (
    <Container>
      <MainStory>
        <Profile />
        <NameContainer>
          <Text>백무혀니</Text>
        </NameContainer>
      </MainStory>

      <Story />
      <Story />
      <Story />
      <Story />
    </Container>
  );
};

export default Storys;
