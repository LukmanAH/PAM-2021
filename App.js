import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, StatusBar, KeyboardAvoidingView, TextInput, Alert } from "react-native";

const Counter = () => {

  const [batas, setBatas] = useState(7);

  const [inputbts, setInputbts] = useState(0)

  const [posisi, setPosisi] = useState(0);

  const aturBatas = (text) => {
    if ((text / 1) > 0) {
      setBatas(text / 1);
    } else {
      Alert.alert("Batas harus lebih besar dari Nol !")
      setBatas(1);
    }

    setPosisi(0);
  }

  if (posisi >= batas) {
    alert("Sudah Mencapai Batas");
    setPosisi(0);
  }

  return (
    <View>

      <StatusBar
        backgroundColor="#61dafb"
        barStyle='default'
      />



      <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#F0C38E', alignSelf: 'center', paddingTop: 20 }}>Batas : {batas} x</Text>

      <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", alignSelf: "center", padding: 10, marginTop: 15 }}>
        <TextInput style={styles.input} placeholder={'Input Batas'} onChangeText={text => setInputbts(text)} />
        <TouchableOpacity style={styles.button3} onPress={() => aturBatas(inputbts)}><Text>Atur Batas</Text></TouchableOpacity>
      </View>





      <Text style={styles.terhitung}>{posisi}</Text>

      <TouchableOpacity style={styles.button1} onPress={() => setPosisi(posisi + 1)}>
        <Text style={{ fontSize: 100, margin: 60 }}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={() => setPosisi(0)}>
        <Text style={{ fontWeight: "bold", justifyContent: 'space-between' }}>Reset</Text>
      </TouchableOpacity>
    </View >
  );
};

const styles = StyleSheet.create({

  terhitung: {
    fontSize: 110,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#F0C38E',
    alignSelf: 'center'
  },

  button1: {
    width: 320,
    height: 320,
    justifyContent: 'center',
    backgroundColor: '#8916FF',
    borderRadius: 160,
    alignItems: 'center',
    alignSelf: "center",
  },

  button2: {
    padding: 10,
    margin: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FF25C2',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: "center",
    justifyContent: 'space-between',
  },

  button3: {
    width: 80,
    height: 25,
    backgroundColor: "pink",
    height: 40,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    alignItems: "center",
    fontSize: 16,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    justifyContent: 'center'
  },


  input: {
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: '#FFF',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    minWidth: 50,
    height: 40,
    padding: 3,
  },

});

export default Counter;