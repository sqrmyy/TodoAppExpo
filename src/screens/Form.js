import React, { Component } from 'react';
import { SafeAreaView, Button, StyleSheet } from 'react-native';
import FormInput from '../components/FormInput';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoValue: '',
      memoValue: '',
      todoList: [],
    };
  }

  render() {
    const { todoValue, memoValue, todoList } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <FormInput
          label='やること'
          value={todoValue}
          placeholder='何かやること'
          onChangeText={(v) => this.setState({ todoValue: v })}
        />
        <FormInput
          label='メモ'
          value={memoValue}
          placeholder='何かメモ'
          onChangeText={(v) => this.setState({ memoValue: v })}
        />
        <Button
          title='登録'
          onPress={() => {
            const newList = todoList.concat({
              todo: todoValue,
              memo: memoValue,
            });
            this.setState({
              todoValue: '',
              memoValue: '',
              todoList: newList,
            });
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
