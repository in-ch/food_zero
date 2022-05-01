/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Calendar, CalendarList} from 'react-native-calendars';
import {View} from 'react-native';
import styled from 'styled-components/native';
import moment from 'moment';
import 'moment/locale/ko';

require('moment-timezone');

import Header from './Header';
import {SizedBox} from '@components/SizedBox';
import {nomalizes} from '@utills/constants';

const TextContainer = styled.View`
  padding-left: ${nomalizes[2]}px;
  padding-top: ${nomalizes[2]}px;
  padding-bottom: ${nomalizes[2]}px;
  margin-bottom: ${nomalizes[5]}px;
  margin-right: ${nomalizes[5]}px;
  background-color: #5f5bff;
`;
const DayText = styled.Text<DayTextProps>`
  color: ${props => (props.disabled === 'disabled' ? '#cacaca' : '#303030')};
`;
const TText = styled.Text`
  text-align: left;
  font-size: ${nomalizes[8]}px;
`;

interface DayTextProps {
  disabled: string;
}

const CCalendar = () => {
  return (
    <>
      <CalendarList
        dayComponent={({date, state}) => {
          console.log('상태' + state);
          return (
            <View style={{height: 80}}>
              <DayText disabled={state}>{date?.day}</DayText>
              <SizedBox.Custom margin={nomalizes[5]} />
              {state !== 'disabled' && (
                <>
                  <TextContainer>
                    <TText>파인애플</TText>
                  </TextContainer>
                  <TextContainer>
                    <TText>토마토</TText>
                  </TextContainer>
                  <TextContainer>
                    <TText>토마토</TText>
                  </TextContainer>
                </>
              )}
            </View>
          );
        }}
        theme={{
          'stylesheet.calendar.main': {
            dayContainer: {
              borderColor: '#D1D3D4',
              borderTopWidth: 1,
              flex: 1,
              height: nomalizes[70],
            },
            week: {
              marginBottom: 0,
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
          },
          'stylesheet.calendar.header': {
            dayTextAtIndex6: {
              color: 'red',
            },
          },
        }}
        current={'2022-04-17'}
        minDate={'2015-01-01'}
        maxDate={'2030-12-31'}
        monthFormat={'yyyy MM'}
        disableMonthChange={true}
        hideExtraDays={false}
        firstDay={1}
        hideDayNames={false}
        showWeekNumbers={false}
        hideArrows={true}
        disableArrowLeft={true}
        disableArrowRight={true}
        disableAllTouchEventsForDisabledDays={true}
        enableSwipeMonths={false}
        horizontal={true}
        pagingEnabled={true}
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        renderHeader={date => {
          return (
            <>
              <Header date={date} />
            </>
          );
        }}
        // Enable the option to swipe between months. Default = false
      />
    </>
  );
};

export default CCalendar;
