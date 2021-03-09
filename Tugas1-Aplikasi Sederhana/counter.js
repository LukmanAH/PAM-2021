
import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from 'react-redux'
import { tambahCounter, resetCounter } from './redux/action'

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(data => data.counter);

  const [batas, setBatas] = useState(7);

  if (counter >= batas) {
    alert("Sudah Mencapai Batas");
    dispatch(resetCounter(counter))
  }

  return (
    <View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", alignSelf: "center", padding: 10 }}>
        <TouchableOpacity style={styles.button3} onPress={() => setBatas(7)}>7x</TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => setBatas(30)}>30x</TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => setBatas(33)}>33x</TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => setBatas(100)} >100x</TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => setBatas(120)}>120x</TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => setBatas(300)}>300x</TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => setBatas(1000)}>1000x</TouchableOpacity>
      </View>

      <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#F0C38E', alignSelf: 'center' }}>Batas :{batas} x</Text>
      <Text style={{ fontSize: 110, marginTop: 20, fontWeight: 'bold', color: '#F0C38E', alignSelf: 'center' }}>{counter}</Text>

      <TouchableOpacity style={styles.button1} onPress={() => dispatch(tambahCounter(counter))}>
        <Text style={{ fontSize: 100, margin: 60 }}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => dispatch(resetCounter(counter))} >
        <Text style={{ fontWeight: "bold" }}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button1: {
    width: 320,
    height: 320,
    margin: 10,
    padding: 20,
    backgroundColor: '#8916FF',
    borderRadius: 160,
    alignItems: 'center',
    alignSelf: "center",
  },

  button2: {
    width: 80,
    height: 30,
    margin: 10,
    padding: 20,
    backgroundColor: '#FF25C2',
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: "center",
  },

  button3: {
    width: 50,
    height: 30,
    backgroundColor: "pink",
    margin: 3,
    borderRadius: 5,
    alignItems: "center",
    fontSize: 16,
  },
});

export default Counter;
