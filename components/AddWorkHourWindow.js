import React from 'react';
import {
  StyleSheet,
  View,
  // Text,
  Dimensions,
} from 'react-native';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AddWorkHourWindow: () => React$Node = () => {
  // const someFunction = () => {

  // };

  // const addWorkHours = () => {

  // };

  // const removeWorkHours = () => {

  // };

  return (
    <>
      <View style={styles.container}>
        {/* <FormLabel>Name</FormLabel> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height / 3,
    width: width,
    left: -23,
    top: 100,
    padding: 23,
    position: 'absolute',
    backgroundColor: 'red',
  },
});

export default AddWorkHourWindow;
