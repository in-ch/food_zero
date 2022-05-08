import React from 'react';
import styled from 'styled-components/native';

import {nomalizes} from '@utills/constants';
import {cssUtil} from '@utills/cssUtil';

const Container = styled.View`
  height: ${nomalizes[35]}px;
  background-color: #fff;
  border: 1px solid #777777;
  border-radius: ${nomalizes[5]}px;
  display: flex;
  ${cssUtil.doubleCenter};
`;
const TText = styled.Text`
  font-size: ${nomalizes[12]}px;
  color: #000;
`;
const CalendarResult = () => {
  return (
    <Container>
      <TText>2022 / 05 / 08</TText>
    </Container>
  );
};

export default CalendarResult;
