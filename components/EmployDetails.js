import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const EmployDetails: () => React$Node = ({employee}) => {
  return (
    <>
      <View style={styles.sectionContainer}>
        <Image
          source={require('../media/trump.jpg')}
          style={styles.personImage}
        />
        <View style={styles.list}>
          <Text style={styles.sectionTitle}>
            {`${employee.name.first} ${employee.name.last}`}
          </Text>
          <Text>
            {`${employee.address.city}, ${employee.address.street}, ${employee.address.number}`}
          </Text>
          <Text>{`${employee.phone}, ${employee.email}`}</Text>
          <Text>
            {`Seniority: ${employee.startDate.day}/${
              employee.startDate.month
            }/${employee.startDate.year}`}
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  personImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    backgroundColor: 'red',
  },
  sectionContainer: {
    marginTop: 32,
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  list: {
    marginTop: -8,
  }
});

export default EmployDetails;
