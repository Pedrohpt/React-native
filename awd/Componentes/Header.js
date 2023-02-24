import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native"
import topo from "../assets/dominus.png"

const largura = Dimensions.get("screen").width; 

const Header = () =>{
    return(
        <View>
            <Image source={topo} style = {estilos.cabecalho}/>
            <Text style = {estilos.texto}>Topo</Text>
            <Text style = {estilos.texto}>░░░░</Text>
        </View>
    );
}

const estilos = StyleSheet.create ({
    cabecalho: {
        width:"100%",
        height: 535 / 1000 * largura,
    },

    texto: {
        color: "blue",
        fontSize: 60,
        position: "absolute",
        alignSelf: "center",
    },
});

export default Header;
