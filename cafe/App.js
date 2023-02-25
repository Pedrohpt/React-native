import React from "react";
import {View, StatusBar, StyleSheet} from "react-native";
import Header from "./Componentes/Header"
import Body from "./Componentes/Body"

export default function App(){
  return(
    <View style = {estilos.corpo}>
      <StatusBar/>
      <Header/>
      <Body/>
    </View>
  );
};

const estilos = StyleSheet.create({
  corpo: {
      backgroundColor: "#E7E7E7"
  },
});