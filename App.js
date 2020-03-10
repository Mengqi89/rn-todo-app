import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
import InputBar from './components/InputBar'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todoInput: '',
      todos: [
        { id: 0, title: 'Take out the trash', done: false },
        { id: 1, title: 'Cook dinner', done: false }
      ]
    }
  }

  render() {
    const statusBar = (Platform.OS == 'ios') ? <View style={styles.statusBar}></View> : <View></View>

    const textChange = (todoInput) => this.setState({ todoInput })

    return (
      <View style={styles.container}>
        {statusBar}
        <Header title='todoapp' />
        <InputBar textChange={textChange} />
        <Text>{this.state.todoInput}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  statusBar: {
    backgroundColor: '#FFCE00',
    height: 20
  }
})
