import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import AddTodo from './components/addTodo';
import Header from './components/Header';
import TodoItem from './components/todoItem';

const App = () => {
  const [todos, setTodos] = useState([
    {text: 'Buy coffee', key: 1},
    {text: 'Create an app', key: 2},
    {text: 'Play on the switch', key: 3},
  ]);
  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = text => {
    setTodos(prevTodos => {
      return [{text: text, key: Math.random().toString()}, ...prevTodos];
    });
  };
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddin: 40,
  },
  list: {
    marginTop: 20,
  },
});
