import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Counter from './features/counter/Counter';
import { Provider } from 'react-redux';
import { store } from './app/store';
import TimeDisplay from './features/time/Time';
import Post from './features/post/Post';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Counter />
        <TimeDisplay
          label="(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima"
          offset="-5:00"
        />
        <Post id={1} />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
