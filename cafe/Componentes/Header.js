import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native"
import topo from "../assets/coffee.png"

const largura = Dimensions.get("screen").width; 

const Header = () =>{
    return<>
        <View>
            <Image source={topo} style = {estilos.cabecalho}/>
            <Text style = {estilos.cabecalhoTexto}>DOMINUS</Text>
        </View>
    </>
}

const estilos = StyleSheet.create({
    cabecalho: {
        resizeMode: "contain",
        width: "70%",
        height: 530 / 471 * largura,
        alignSelf: "center",
        marginTop: -65,
        marginBottom: -100,
    },

    cabecalhoTexto: {
        fontSize: 35,
        textAlign: "center",
        color: "white",
        backgroundColor: "#022096",
        borderRadius: 10,
        width: "40%",
        alignSelf: "center",
        position: "absolute",
        marginTop: 5
        },
    });


export default Header;