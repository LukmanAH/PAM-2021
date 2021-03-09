import React, { useState } from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux";
import Counter from "./counter";


const App = () => {
  return (
    <Provider store={store}>
      <View style={{ backgroundColor: "#091945", height: 823 }}>
        <View style={{ width: 350, height: 70, marginTop: 30, alignItems: 'center', backgroundColor: '#8916FF', borderRadius: 10, alignSelf: 'center' }}>
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#BLACK' }}>Tasbih Digital</Text>
        </View>
        <Counter />
      </View >
    </Provider>
  );
};

export default App;