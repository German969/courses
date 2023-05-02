import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { counter: state.counter + 1 };
    case 'decrease':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button title="Increase" onPress={() => dispatch({ type: 'increase' })} />
      <Button title="Decrease" onPress={() => dispatch({ type: 'decrease' })} />
      <Text>Counter: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
