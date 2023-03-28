import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const TodoItem = ({item, pressHandler}) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    margin: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'dashed',
    borderRadius: 10,
    fontSize:18,
    color:'#000'
  },
});
