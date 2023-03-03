import React from "react";
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import logoRodape from "../assets/logo2.png"

const Footer = () =>{
    return(
        <View style={styles.rodape}>
            <Image source={logoRodape} style={styles.imgRodape}/>
            <Text style={styles.txtRodape}>Produzir • Educar • Servir</Text>
        </View>
    )
}

const styles = StyleSheet.create({

//----------------------------------------- RODAPE ------------------------------------------  
    rodape:{
        width: "100%",
        height: 50,
        flexDirection: "row",
    },

    imgRodape:{
        position: "absolute",
        width: 60,
        height: 60,
        marginTop: -5,
        
    },

    txtRodape:{
        position: "absolute",
        width: "100%",
        textAlign: "center",
        alignSelf: "center",
        fontSize: 16,
    },
})
export default Footer;