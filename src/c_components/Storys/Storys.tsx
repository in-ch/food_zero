import React from 'react';
import styled from 'styled-components/native';
import {Text, View} from 'react-native';

import {nomalizes} from '@utills/constants';
import Story from './Story';

const Container = styled.View`
  height: ${nomalizes[85]}px;
`;
const SScrollView = styled.ScrollView`
  height: ${nomalizes[70]}px;
`;
const Wrapper = styled.View`
  height: ${nomalizes[70]}px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: ${nomalizes[9]}px;
  margin-top: ${nomalizes[5]}px;
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
      <SScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        <Wrapper>
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
          <Story />
          <Story />

          <View style={{width: nomalizes[5]}} />
        </Wrapper>
      </SScrollView>
    </Container>
  );
};

export default Storys;
