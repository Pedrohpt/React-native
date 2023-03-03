import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Nav from './Componentes/Nav'
import Header from './Componentes/Header'
import Body from './Componentes/Body';
import Footer from './Componentes/Footer'

export default function App(){
  return(
    <SafeAreaView style={styles.bgApp}>
        <StatusBar/>
        <Nav/>
        <ScrollView>
        <Header/>
        <Body/>
        <Footer/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bgApp: {
    backgroundColor: "#E3E3E3",
    height: "100%",
  },

})