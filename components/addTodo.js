import React, {useState} from 'react';
import {Text, StyleSheet, TextInput, Button, View} from 'react-native';

const AddTodo = ({submitHandler}) => {
  const [text, setText] = useState('');

  const changeHandler = val => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="add todos..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="add todo"
        color="green"
      />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  textInput: {
    margin: 20,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderColor: '#000',
  },
});
