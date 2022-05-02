import React from 'react';
import styled from 'styled-components/native';
import {nomalizes} from '~/utills/constants';

const Container = styled.View`
  width: 100%;
  height: ${nomalizes[70]}px;
  border: 1px solid #000;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: ${nomalizes[9]}px;
`;
const Story = styled.View`
  width: ${nomalizes[50]}px;
  height: ${nomalizes[70]}px;
  border: 1px solid #000;
`;
const Storys = () => {
  return (
    <Container>
      <Story />
    </Container>
  );
};

export default Storys;
