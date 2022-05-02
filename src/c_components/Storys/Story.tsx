import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {nomalizes} from '@utills/constants';

const Container = styled.View`
  width: ${nomalizes[50]}px;
  height: ${nomalizes[70]}px;
  display: flex;
  flex-direction: column;
  margin-left: ${nomalizes[10]}px;
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
const Story = () => {
  return (
    <Container>
      <Profile />
      <NameContainer>
        <Text>아무 이름</Text>
      </NameContainer>
    </Container>
  );
};

export default Story;
