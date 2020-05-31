/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import EmployDetails from './components/EmployDetails';
import Calender from './components/Calender';
import Calculate from './components/Calculate';
import EMPLOYEES from './components/data/employees.json';

const App: () => React$Node = () => {
  const [year, setYear] = useState(2019);
  const [month, setMonth] = useState(1);
  const id = '1';

  const employees = new Array(...EMPLOYEES);
  const employee = employees.find(i => i.id === '1');
  if (employee === undefined) {
    console.error("no user with '1' was found");
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.body}>
            <EmployDetails employee={employee} />
            <Calender
              getYear={year}
              setYear={setYear}
              getMonth={month}
              setMonth={setMonth}
              getId={id}
              employee={employee}
            />
            <Calculate getYear={year} getMonth={month} getId={id} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
  },
  sectionContainer: {
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
