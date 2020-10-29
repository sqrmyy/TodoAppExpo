import React, { Component } from 'react';
import {
  SafeAreaView,
  Button,
  FlatList,
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Home extends Component {
  render() {
    const { navigation, todoList } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Button
          title='登録画面へ'
          onPress={() => navigation.navigate('Form')}
        />
        <FlatList
          style={styles.listBox}
          data={todoList}
          renderItem={({ item }) => {
            return (
              <View style={styles.listItem}>
                <Text>{item.todo}</Text>
                <Text>{item.memo}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.todo}
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
  listItem: {
    height: 64,
    width: 200,
    marginTop: 16,
    padding: 16,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
