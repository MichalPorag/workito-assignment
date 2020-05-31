import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

import utils from './utils/WorkHoursApi';

const Calculate: () => React$Node = ({getYear, getMonth, getId}) => {
  const func = () => {
    try {
      alert(utils.recoveryDaysByEmployee(getId, getYear, getMonth));
    } catch (e) {
      console.log('error is', e);
    }
  };

  return (
    <>
      <View style={styles.sectionContainer}>
        <TouchableOpacity onPress={func} style={styles.button}>
          <Text style={styles.sectionTitle}>Calculate Recovery Days</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 45,
  },
  button: {
    flex: 1,
    height: 50,
    backgroundColor: 'blue',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: -3,
  },
});

export default Calculate;
