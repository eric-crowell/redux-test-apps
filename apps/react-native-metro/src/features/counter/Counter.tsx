import React from 'react';
import {
  Button, StyleSheet, Text, TextInput, View,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../../app/hooks.js';
import {
  decrement, increment, incrementAsync, incrementByAmount, incrementIfOdd,
} from './counterSlice.js';

export default function Counter() {
  const dispatch = useAppDispatch();

  const count = useAppSelector((state) => state.counter.value);

  const [incrementAmount, setIncrementAmount] = React.useState('2');

  return (
    <View style={styles.container}>
      <Text testID="counter-title" style={styles.textTitle}>
        Counter
      </Text>
      <View style={styles.row}>
        <Button
          testID="counter-decrement-button"
          title="-"
          accessibilityLabel="Decrement counter"
          onPress={() => { dispatch(decrement()); }}
        />
        <View style={{ margin: 5 }}>
          <Text testID="counter-value">
            {count}
          </Text>
        </View>
        <Button
          testID="counter-increment-button"
          title="+"
          accessibilityLabel="Increment counter"
          onPress={() => { dispatch(increment()); }}
        />
      </View>
      <View style={styles.row}>
        <TextInput
          testID="counter-amount-input"
          style={styles.input}
          value={incrementAmount}
          onChangeText={setIncrementAmount}
          keyboardType="numeric"
        />
        <Button
          testID="counter-add-amount-button"
          title="Add Amount"
          accessibilityLabel="Add amount to counter"
          onPress={() => {
            dispatch(incrementByAmount(Number(incrementAmount)));
          }}
        />
        <Button
          testID="counter-add-async-button"
          title="Add Async"
          accessibilityLabel="Add amount asynchronously to counter"
          onPress={() => {
            dispatch(incrementAsync(Number(incrementAmount)));
          }}
        />
        <Button
          testID="counter-add-if-odd-button"
          title="Add If Odd"
          accessibilityLabel="Add amount to counter if odd"
          onPress={() => {
            dispatch(incrementIfOdd(Number(incrementAmount)));
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 12,
    gap: 7,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    flexWrap: 'wrap',
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
  },
});
