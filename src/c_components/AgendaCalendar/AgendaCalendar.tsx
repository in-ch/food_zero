import React, {Component} from 'react';
import {Alert, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {
  Agenda,
  DateData,
  AgendaEntry,
  AgendaSchedule,
} from 'react-native-calendars';
import styled from 'styled-components/native';
import images from '~/assets/images';
import {nomalizes} from '~/utills/constants';
import {cssUtil} from '~/utills/cssUtil';

const Heading = styled.Text`
  font-weight: bold;
  font-size: ${nomalizes[12]}px;
`;
const RenderContainer = styled.View`
  height: ${nomalizes[40]}px;
  margin-top: ${nomalizes[5]}px;
`;
const RenderFlexOne = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: ${nomalizes[10]}px;
  height: ${nomalizes[20]}px;
  align-items: center;
`;
const Row = styled.View`
  display: flex;
  flex-direction: row;
  ${cssUtil.doubleCenter};
`;
const FruitText = styled.Text`
  margin-left: ${nomalizes[5]}px;
  font-size: ${nomalizes[12]}px;
`;
const ConsumeDone = styled.View`
  width: ${nomalizes[26]}px;
  height: ${nomalizes[10]}px;
  border-radius: ${nomalizes[2]}px;
  margin-right: ${nomalizes[5]}px;
  background-color: #ffd9d7;
  display: flex;
  ${cssUtil.doubleCenter};
`;
const ConsumeDoneText = styled.Text`
  font-size: ${nomalizes[5]}px;
  color: #ff6c63;
`;
const ConsumeDoneDate = styled.Text`
  font-size: ${nomalizes[10]}px;
  color: #a8a8a8;
`;
const Mark = styled.View`
  width: ${nomalizes[8]}px;
  height: ${nomalizes[8]}px;
  border-radius: ${nomalizes[2]}px;
  background-color: #637cff;
`;
const testIDs = {
  menu: {
    CONTAINER: 'menu',
    CALENDARS: 'calendars_btn',
    CALENDAR_LIST: 'calendar_list_btn',
    HORIZONTAL_LIST: 'horizontal_list_btn',
    AGENDA: 'agenda_btn',
    EXPANDABLE_CALENDAR: 'expandable_calendar_btn',
    WEEK_CALENDAR: 'week_calendar_btn',
    TIMELINE_CALENDAR: 'timeline_calendar_btn',
  },
  calendars: {
    CONTAINER: 'calendars',
    FIRST: 'first_calendar',
    LAST: 'last_calendar',
  },
  calendarList: {CONTAINER: 'calendarList'},
  horizontalList: {CONTAINER: 'horizontalList'},
  agenda: {
    CONTAINER: 'agenda',
    ITEM: 'item',
  },
  expandableCalendar: {CONTAINER: 'expandableCalendar'},
  weekCalendar: {CONTAINER: 'weekCalendar'},
};

interface State {
  items?: AgendaSchedule;
}

export default class AgendaScreen extends Component<State> {
  state: State = {
    items: undefined,
  };

  render() {
    return (
      <Agenda
        testID={testIDs.agenda.CONTAINER}
        items={this.state.items}
        loadItemsForMonth={this.loadItems}
        selected={'2022-05-07'}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        showClosingKnob={true}
        theme={{
          agendaDayNumColor: '#000',
          agendaTodayColor: '#FF6C63',
          agendaKnobColor: '#e4e4e4',
          dotColor: '#fff',
          selectedDayBackgroundColor: '#FF6C63',
          stylesheet: {
            marking: {
              display: 'none',
            },
          },
        }}
      />
    );
  }

  loadItems = (day: DateData) => {
    const items = this.state.items || {};
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }

      const newItems: AgendaSchedule = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      this.setState({
        items: newItems,
      });
    }, 1000);
  };

  renderItem = (reservation: AgendaEntry) => {
    return (
      <TouchableOpacity
        testID={testIDs.agenda.ITEM}
        style={[styles.item]}
        onPress={() => Alert.alert(reservation.name)}>
        {/* vvv */}
        <Heading>과일</Heading>
        <RenderContainer>
          <RenderFlexOne>
            <Row>
              <Mark />
              <FruitText>사과</FruitText>
            </Row>
            <Row>
              <ConsumeDone>
                <ConsumeDoneText>소비 완료</ConsumeDoneText>
              </ConsumeDone>
              <Image
                style={{
                  width: nomalizes[10],
                  height: nomalizes[10],
                }}
                source={images.setting}
              />
            </Row>
          </RenderFlexOne>
          <RenderFlexOne>
            <ConsumeDoneDate>22.05.01 ~ 23.05.01</ConsumeDoneDate>
            <ConsumeDoneDate>비공개</ConsumeDoneDate>
          </RenderFlexOne>
        </RenderContainer>
      </TouchableOpacity>
    );
  };

  renderEmptyDate = () => {
    return <View style={styles.emptyDate} />;
  };

  rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
    return r1.name !== r2.name;
  };

  timeToString(time: number) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 8,
    padding: 20,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});