import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
//EXTRA: clicar no texto abre modal com campo para digitar 


export default function App() {
  const [r, setR] = useState('0');
  const [g, setG] = useState('0');
  const [b, setB] = useState('0');

  function getHexCode() {
    var hexR = Number(r).toString(16).toUpperCase();
    var hexG = Number(g).toString(16).toUpperCase();
    var hexB = Number(b).toString(16).toUpperCase();
    return '#' + (hexR.length == 1 ? ('0' + hexR) : hexR) + (hexG.length == 1 ? ('0' + hexG) : hexG) + (hexB.length == 1 ? ('0' + hexB) : hexB);
  }

  function getTextColor() {
    //quando os tres estiverem abaixo dos 110 muda os textos para branco
    return (Number(r) < 110 && Number(g) < 110 && Number(b) < 110) ? "#FFFFFF" : "#000000"
  }

  return (
    <View style={{flex: 1, backgroundColor: getHexCode(), alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 60, fontWeight: 'bold', marginBottom: 40, color: getTextColor()}}>{getHexCode()}</Text>
      <Text style={{ fontSize: 25, marginTop: 30, color: getTextColor()}}>R: {r}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={255}
        step={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={(value) => setR(value)}
      />
      <Text style={{ fontSize: 25, marginTop: 30, color: getTextColor()}}>G: {g}</Text>      
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={255}
        step={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={(value) => setG(value)}
      />
      <Text style={{ fontSize: 25, marginTop: 30, color: getTextColor()}}>B: {b}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={255}
        step={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={(value) => setB(value)}
      />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  sliderText: {
    fontSize: 25,
    marginTop: 30
  },
  slider: {
    width: 300,
    height: 40,
    margin: 10
  }
});