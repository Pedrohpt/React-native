import React from "react";
import {View, SafeAreaView, StatusBar} from "react-native";
import Header from "./Componentes/Header"

export default function App(){
  return(
    <SafeAreaView>
      <StatusBar/>
      <Header/>
    </SafeAreaView>
  );
};