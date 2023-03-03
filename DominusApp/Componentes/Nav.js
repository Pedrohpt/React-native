import React from "react";
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native'
import logo from "../assets/logo.png"
import opcoes from "../assets/iconeOpcoes.png"

const largura = Dimensions.get('screen').width

const Nav = () =>{
    return(
        <View>
            <View style={styles.nav}>
                <Image source={logo} style={styles.logoNav} />
                <Text style={styles.txtNav}>DOMINUS</Text>
                <Image source={opcoes} style={styles.opcNav} />
            </View>
        </View>
            )
};


const styles = StyleSheet.create({

    nav:{
        backgroundColor:"#406289",
        height: 50,
        flexDirection: "row",
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },

    logoNav:{
        resizeMode: "contain",
        width: "10%",
        height: 267 / 237 * largura,
        marginTop: -195
    },

    txtNav: {
        color: "white",
        fontSize: 25,
        width: "100%",
        position: "absolute",
        alignSelf: "center",
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -2, height: 2},
        textShadowRadius: 10,
    },

    opcNav:{
        tintColor: "#fff",
        resizeMode: "contain",
        width: "8%",
        height: 267 / 237 * largura,
        marginTop: -195,
        marginLeft: 310,
    },
});

export default Nav;