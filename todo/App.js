/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import {KeyboardAvoidingView, StyleSheet, Platform, Text, TextInput, View, TouchableOpacity, Keyboard, FlatList, ScrollView} from 'react-native';

import Todo from './components/Todo';

const App = () => {

  const [todo, setTodo] = useState('');
  const [items, setItems] = useState([]);

  const addTodo = () => {
    Keyboard.dismiss();

    // add todo to items array
    setItems([...items,todo]);

    // clear input field
    setTodo(null);
  };

  const deleteTodo = (id) => {
    setItems((prevItems) => {
      // return only items that don't match id
      return prevItems.filter((_, index) => {
        return index !== id;
      });
    });
  };


  return (
   <View style={styles.container}>
    <Text style={styles.title}>My Todo App</Text>

    {/* Input Section */}
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.inputContainer}
    >
      <TextInput
      style={styles.input}
      placeholder="Enter Todo"
      value={todo}
      onChangeText={text => setTodo(text)}
       />

      <TouchableOpacity onPress={() => addTodo()}>
        <View style={styles.addContainer}>
          <Text>+</Text>
        </View>
      </TouchableOpacity>

    </KeyboardAvoidingView>

    {/* Item Section */}
    <ScrollView>
      {items.map((item,index) => {
        return <Todo
        key={index}
        id = {index}
        item={item}
        onChecked={deleteTodo} />;
      })}


    </ScrollView>

   </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop:50, paddingHorizontal:30},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#FAFAFA',
    width: '80%',
    borderRadius: 10,
    height:40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
  addContainer: {
    backgroundColor:'#FAFAFA',
    width: 40,
    height:40,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#C0C0C0',
  },
});

export default App;
