import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'

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

    return (
      <View style={styles.container} >
        {statusBar}
        <Header title='todoapp' />
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
