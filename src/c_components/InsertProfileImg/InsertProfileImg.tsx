import React from 'react';
import styled from 'styled-components/native';

import {nomalizes} from '@utills/constants';
import {cssUtil} from '@utills/cssUtil';

const Container = styled.View`
  width: 100%;
  height: ${nomalizes[80]}px;
  border: 1px solid #000;
  display: flex;
  ${cssUtil.doubleCenter};
`;
const Profile = styled.TouchableOpacity`
  width: ${nomalizes[80]}px;
  height: ${nomalizes[80]}px;
  border-radius: ${nomalizes[40]}px;
  background-color: #e4e4e4;
  border: 1px solid #000;
`;

const InsertProfileImg = () => {
  return (
    <Container>
      <Profile />
    </Container>
  );
};

export default InsertProfileImg;
