import React from 'react';
import styled from 'styled-components/native';
import {nomalizes} from '~/utills/constants';
// import moment from 'moment';
// import 'moment/locale/ko';

// require('moment-timezone');

const Container = styled.View`
  width: 100%;
  height: ${nomalizes[40]}px;
`;
const HHeader = styled.View`
  width: 100%;
  height: ${nomalizes[40]}px;
  display: flex;
  justify-content: center;
`;
const TText = styled.Text`
  font-size: ${nomalizes[16]}px;
  font-weight: bold;
`;
interface Props {
  date: string;
}

const Header = ({date}: Props) => {
  const ddate = new Date(date);
  const month = ddate.getMonth();
  const year = ddate.getFullYear();
  return (
    <Container>
      <HHeader>
        <TText>
          {year}년 {month + 1}월
        </TText>
      </HHeader>
    </Container>
  );
};

export default Header;
