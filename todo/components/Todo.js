/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const Todo = props => {
  //   const [isChecked, setIsChecked] = useState(false);

  //   Old version - focuses on striking through and changing circle color through tenery operator and CSS
  //   const handleCheck = () => {
  //     // when item is checked
  //     // strikethrough text and change circle to green
  //     setIsChecked(prevValue => {
  //       return !prevValue;
  //     });
  //   };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {/* <Text style={isChecked ? styles.textChecked : styles.textUnchecked}> */}
        <Text style={styles.textUnchecked}>{props.item}</Text>

        {/* //   onPress={() => handleCheck()}
        //   style={isChecked ? styles.circleChecked : styles.circleUnchecked} */}

        <TouchableOpacity
          onPress={() => props.onChecked(props.id)}
          style={styles.circleUnchecked}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'E5E5E5',
    borderWidth: 1,
    opacity: 0.4,
    padding: 10,
    margin: 5,
    borderRadius: 15,
  },
  textUnchecked: {
    textDecorationLine: 'none',
  },
  textChecked: {
    textDecorationLine: 'line-through',
  },
  circleUnchecked: {
    height: 20,
    width: 20,
    // 20/2
    borderRadius: 10,
    backgroundColor: '#1C6DD0',
  },
  circleChecked: {
    height: 20,
    width: 20,
    // 20/2
    borderRadius: 10,
    backgroundColor: '#A3E4DB',
  },
});

export default Todo;
