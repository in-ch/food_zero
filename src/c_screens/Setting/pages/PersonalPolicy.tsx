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

export interface PersonalPolicyProps {
  navigation: NavigationProp<RootTabParamList, 'PersonalPolicy'>;
}

const PersonalPolicy = ({navigation}: PersonalPolicyProps) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header text="개인정보처리방침" back={goBack} />
      <Wrapper />
    </Container>
  );
};

export default PersonalPolicy;
