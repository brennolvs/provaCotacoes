import React from 'react';
import { View } from 'react-native';
import ConversaoMoedas from './components/cotacao';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ConversaoMoedas />
    </View>
  );
};

export default App;
