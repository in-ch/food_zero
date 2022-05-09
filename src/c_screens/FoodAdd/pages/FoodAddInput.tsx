import {NavigationProp, RouteProp} from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import Header from '@components/Header/Header';
import {RootTabParamList} from '@navigation/RootNavigation';
import {nomalizes} from '@utills/constants';
import TextBox from '~/c_components/TextBox';
import {SizedBox} from '~/c_components/SizedBox';
import SelectInput from '~/c_components/SelectInput';
import DDatePicker from '~/c_components/DatePicker';

const Container = styled.View`
  flex: 1;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: ${nomalizes[20]}px;
  background-color: #fff;
`;
const Heading = styled.Text`
  font-size: ${nomalizes[14]}px;
  margin-bottom: ${nomalizes[10]}px;
  color: #000;
`;

export interface FoodSearchResultProps {
  navigation: NavigationProp<RootTabParamList, 'FoodAddInput'>;
  route: RouteProp<RootTabParamList, 'FoodAddInput'>;
}

const FoodAddInput = ({navigation, route}: FoodSearchResultProps) => {
  return (
    <>
      <Header text="식품 추가하기" back={() => navigation.goBack()} />
      <Container>
        <Heading>식품명</Heading>
        <TextBox text={route?.params?.text} isLeft={true} />
        <SizedBox.Custom margin={nomalizes[40]} />
        <Heading>카테고리 지정</Heading>
        <SelectInput />
        <SizedBox.Custom margin={nomalizes[40]} />
        <Heading>등록일</Heading>
        <DDatePicker />
      </Container>
    </>
  );
};

export default FoodAddInput;
