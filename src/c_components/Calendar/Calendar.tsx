/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Calendar} from 'react-native-calendars';
import {Text, View} from 'react-native';

import Header from './Header';
import {SizedBox} from '@components/SizedBox';
import {nomalizes} from '@utills/constants';

const CCalendar = () => {
  return (
    <>
      <Calendar
        dayComponent={({date, state}) => {
          return (
            <View style={{height: 80}}>
              <Text
                style={{
                  textAlign: 'center',
                  color: state === 'disabled' ? 'black' : 'black',
                  borderBottomColor: 'blue',
                }}>
                {date?.day}
              </Text>
              <SizedBox.Custom margin={nomalizes[5]} />
              <Text
                style={{
                  textAlign: 'center',
                  color: state === 'disabled' ? 'black' : 'black',
                  borderBottomColor: 'blue',
                }}>
                토마토
              </Text>
              <Text>딸기</Text>
              <Text>오렌지</Text>
            </View>
          );
        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: 'blue',
          indicatorColor: 'blue',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
        current={'2022-04-17'}
        minDate={'2022-01-01'}
        maxDate={'2022-12-31'}
        onDayPress={day => {
          console.log('selected day', day);
        }}
        onDayLongPress={day => {
          console.log('selected day', day);
        }}
        monthFormat={'yyyy MM'}
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        hideArrows={false}
        renderArrow={direction =>
          direction === 'left' ? (
            <Text style={{backgroundColor: 'red', width: 10, height: 10}} />
          ) : (
            <View style={{backgroundColor: 'blue', width: 10, height: 10}} />
          )
        }
        hideExtraDays={true}
        disableMonthChange={true}
        firstDay={1}
        hideDayNames={false}
        showWeekNumbers={false}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        disableArrowLeft={true}
        disableArrowRight={true}
        disableAllTouchEventsForDisabledDays={true}
        renderHeader={date => {
          return (
            <>
              <Header date={date} />
            </>
          );
        }}
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
      />
    </>
  );
};

export default CCalendar;
