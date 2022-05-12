import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import styled from 'styled-components/native';
import {RootTabParamList} from '@navigation/RootNavigation';
import HeaderPlus from '~/c_components/Header/HeaderPlus';
import {SizedBox} from '~/c_components/SizedBox';
import {nomalizes} from '~/utills/constants';
export interface CategoryAddProps {
  navigation: NavigationProp<RootTabParamList, 'CategoryAdd'>;
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const CategoryAdd = ({navigation}: CategoryAddProps) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <HeaderPlus text="카테고리 추가" back={goBack} />
      <SizedBox.Custom margin={nomalizes[10]} />
    </Container>
  );
};

export default CategoryAdd;
