import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { getData } from "../database/firebase";
import { Picker } from "@react-native-picker/picker";

export default function HomeScreen() {
  const [bares, setBares] = useState([]);
  const [selectedZone, setSelectedZone] = useState("CENTRO");

  useEffect(() => {
    let bar = getData();
    setBares(bar);
  }, []);

  return (
    <View style={styles.container}>
      <Text>TAPEANDO</Text>
      <Text style={styles.textHeader}>Selecciona una zona:</Text>
      <Picker
        selectedValue={selectedZone}
        onValueChange={(itemValue, itemIndex) => setSelectedZone(itemValue)}
      >
        <Picker.Item label="CENTRO" value="CENTRO" />
        <Picker.Item label="NERVION" value="NERVION" />
        <Picker.Item label="OTROS" value="OTROS" />
        <Picker.Item label="TRIANA" value="TRIANA" />
      </Picker>
      <Picker>
        <Picker.Item label="HOLA" value="hey" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 50,
  },
  textHeader: {
    color: "black",
    fontSize: 18,
  },
  text: { padding: 10, color: "black", height: 50, fontSize: 25 },
});
