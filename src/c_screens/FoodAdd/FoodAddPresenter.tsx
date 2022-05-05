/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import styled from 'styled-components/native';

import Header from '@components/Header/Header';
import SearchInput from '@components/SearchInput';
import {nomalizes} from '@utills/constants';
import {cssUtil} from '@utills/cssUtil';
import {SizedBox} from '~/c_components/SizedBox';

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
`;
const SearchRelateView = styled.View`
  width: 100%;
`;
const SearchRelateViewText = styled.Text`
  font-size: ${nomalizes[12]}px;
  margin-top: ${nomalizes[8]}px;
  margin-bottom: ${nomalizes[8]}px;
`;
const SearchResultBox = styled.View`
  width: 100%;
  height: ${nomalizes[80]}px;
  margin-top: ${nomalizes[10]}px;
  padding-bottom: ${nomalizes[10]}px;
  border-bottom-color: #dbdbdb;
`;
const SearchResultBoxHeading = styled.Text`
  font-size: ${nomalizes[12]}px;
`;
const SearchResultBoxTextContainer = styled.View`
  height: ${nomalizes[16]}px;
  margin-top: ${nomalizes[10]}px;
  display: flex;
  flex-direction: row;
`;
const SearchResultBoxText = styled.Text`
  font-size: ${nomalizes[11]}px;
`;
const SearchResultBoxNumber = styled.Text`
  font-size: ${nomalizes[11]}px;
  margin-left: ${nomalizes[5]}px;
  color: #ff6c63;
`;
const HashTag = styled.View`
  height: ${nomalizes[16]}px;
  padding-left: ${nomalizes[5]}px;
  padding-right: ${nomalizes[5]}px;
  background-color: #f5f5f5;
  display: flex;
  margin-right: ${nomalizes[5]}px;
  border-radius: ${nomalizes[4]}px;
  ${cssUtil.doubleCenter};
`;
const HashTagText = styled.Text`
  font-size: ${nomalizes[8]}px;
  color: #757575;
`;
interface Props {
  GoBack: () => void;
}

const FoodAddPresenter = ({GoBack}: Props) => {
  const [text, setText] = useState<string>('');
  return (
    <>
      <Header text="식품 추가하기" back={GoBack} />
      <Container>
        <Heading>식품명</Heading>
        <SearchInput
          value={text}
          setValue={(value: string) => setText(value)}
          placeholder="식품명 검색하기"
          width={100}
        />
        <SearchRelateView>
          <SearchRelateViewText>식품명ab</SearchRelateViewText>
          <SearchRelateViewText>식품명bc</SearchRelateViewText>
          <SearchRelateViewText>식품명cd</SearchRelateViewText>
        </SearchRelateView>
        <SearchResultBox style={{borderBottomWidth: 1}}>
          <SearchResultBoxHeading>
            식품 이름 들어가는 공간
          </SearchResultBoxHeading>
          <SearchResultBoxTextContainer>
            <SearchResultBoxText>식품 권장 기한</SearchResultBoxText>
            <SearchResultBoxNumber>14일</SearchResultBoxNumber>
          </SearchResultBoxTextContainer>
          <SearchResultBoxTextContainer>
            <HashTag>
              <HashTagText>신선식품</HashTagText>
            </HashTag>
            <HashTag>
              <HashTagText>상온보관</HashTagText>
            </HashTag>
            <HashTag>
              <HashTagText>비조리 섭취 금지</HashTagText>
            </HashTag>
          </SearchResultBoxTextContainer>
        </SearchResultBox>
        <SearchResultBox style={{borderBottomWidth: 1}}>
          <SearchResultBoxHeading>
            식품 이름 들어가는 공간
          </SearchResultBoxHeading>
          <SearchResultBoxTextContainer>
            <SearchResultBoxText>식품 권장 기한</SearchResultBoxText>
            <SearchResultBoxNumber>14일</SearchResultBoxNumber>
          </SearchResultBoxTextContainer>
          <SearchResultBoxTextContainer>
            <HashTag>
              <HashTagText>신선식품</HashTagText>
            </HashTag>
            <HashTag>
              <HashTagText>상온보관</HashTagText>
            </HashTag>
            <HashTag>
              <HashTagText>비조리 섭취 금지</HashTagText>
            </HashTag>
          </SearchResultBoxTextContainer>
        </SearchResultBox>
        <SearchResultBox style={{borderBottomWidth: 1}}>
          <SearchResultBoxHeading>
            식품 이름 들어가는 공간
          </SearchResultBoxHeading>
          <SearchResultBoxTextContainer>
            <SearchResultBoxText>식품 권장 기한</SearchResultBoxText>
            <SearchResultBoxNumber>14일</SearchResultBoxNumber>
          </SearchResultBoxTextContainer>
          <SearchResultBoxTextContainer>
            <HashTag>
              <HashTagText>신선식품</HashTagText>
            </HashTag>
            <HashTag>
              <HashTagText>상온보관</HashTagText>
            </HashTag>
            <HashTag>
              <HashTagText>비조리 섭취 금지</HashTagText>
            </HashTag>
          </SearchResultBoxTextContainer>
        </SearchResultBox>

        <SizedBox.Custom margin={nomalizes[40]} />

        <Heading>등록일</Heading>
        <SearchInput
          value={text}
          setValue={(value: string) => setText(value)}
          placeholder="식품명 검색하기"
          width={100}
        />
      </Container>
    </>
  );
};

export default FoodAddPresenter;
