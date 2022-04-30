import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const HHeader = styled.View`
  width: 250px;
  height: 50px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const GmtToUtc = (data: string) => {};
interface Props {
  date: string;
}

const Header = ({date}: Props) => {
  console.log('달력 : ' + String(date));
  return (
    <HHeader>
      <Text>{String(date)}</Text>
    </HHeader>
  );
};

export default Header;
