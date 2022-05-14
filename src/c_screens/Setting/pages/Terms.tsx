import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import Header from '~/c_components/Header/Header';
import {RootTabParamList} from '~/navigation/RootNavigation';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const Wrapper = styled.View`
  width: 90%;
  margin-left: 5%;
  border: 1px solid #000;
`;

export interface TermsProps {
  navigation: NavigationProp<RootTabParamList, 'Terms'>;
}

const Terms = ({navigation}: TermsProps) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <Header text="이용약관" back={goBack} />
      <Wrapper />
    </Container>
  );
};

export default Terms;
