import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import AddWorkHourWindow from './AddWorkHourWindow';
import utils from './utils/WorkHoursApi';

const height = Dimensions.get('window').height;

const Calender: () => React$Node = ({
  getYear,
  setYear,
  getMonth,
  setMonth,
  getId,
  employee,
}) => {
  const [isAddWorkHourWindowOpen, setAddWorkHourWindowOpen] = useState(false);

  const addWorkHours = () => {
    setAddWorkHourWindowOpen(!isAddWorkHourWindowOpen);
  };

  const addWorkHourWindowOpen = () => {
    return isAddWorkHourWindowOpen ? <AddWorkHourWindow /> : null;
  };

  const lastMonth = () => {
    if (getMonth > 1) {
      setMonth(getMonth - 1);
    } else {
      setYear(getYear - 1);
      setMonth(12);
    }
  };

  const nextMonth = () => {
    if (getMonth < 12) {
      setMonth(getMonth + 1);
    } else {
      setYear(getYear + 1);
      setMonth(1);
    }
  };

  const daysOfWork = () => {
    const days = utils.getWorkDaysThisMonth('1', 2019, 1);
    const list = days.map((day, i) => {
      return (
        <View key={i} style={styles.li}>
          <Text style={styles.liText}>
            In {day.date.day}/{day.date.month}/{day.date.year} total hours {day.total}
          </Text>
        </View>
      );
    });
    return list;
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={lastMonth}>
              <Text> ◀️ </Text>
            </TouchableOpacity>
            <Text style={styles.title}>
              {utils.getNameOfMonth(getMonth)}, {getYear}
            </Text>
            <TouchableOpacity onPress={nextMonth}>
              <Text> ▶️ </Text>
            </TouchableOpacity>
            <Text style={styles.title}>
              Total hours:{' '}
              {utils.getTotalHoursThisMonth(getId, getYear, getMonth)}
            </Text>
          </View>
          <View style={styles.list}>{daysOfWork()}</View>
        </View>
        <TouchableOpacity style={styles.button} onPress={addWorkHours}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
        {addWorkHourWindowOpen()}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  li: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  liText: {
    fontSize: 16,
    color: 'black',
  },
  listContainer: {
    height: height - 300,
    marginTop: 32,
    flex: 1,
    marginRight: 25,
    borderWidth: 1,
    borderColor: "#20232a",
  },
  button: {
    flex: 1,
    backgroundColor: 'blue',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: -25,
    width: 50,
    height: 50,
    position: 'absolute',
    top: height - 300 + 30,
    right: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: -3,
  },
  plus: {
    fontSize: 35,
    color: 'white',
    marginTop: -3,
  },
  container: {
    flexDirection: 'row',
  },
  header: {
    flex: 0,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  list: {
    flex: 1,
  },
});

export default Calender;
