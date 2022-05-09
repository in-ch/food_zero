import React, {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import TextBox from './TextBox';

const DDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setOpen(true)}>
        <TextBox text={String(moment(date).format('YYYY / MM / DD'))} />
      </TouchableWithoutFeedback>
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        locale="kr"
        onConfirm={value => {
          setOpen(false);
          setDate(value);
          console.log(value);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default DDatePicker;
