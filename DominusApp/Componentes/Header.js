import React from "react";
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native'
import imagemHeader from "../assets/imagem.png";
import logo from "../assets/logo.png"
import opcoes from "../assets/iconeOpcoes.png"

const largura = Dimensions.get('screen').width

const Header = () =>{
    return(
        <View>
{/*         <View style={styles.nav}>
                <Image source={logo} style={styles.logoNav} />
                <Text style={styles.txtNav}>DOMINUS</Text>
                <Image source={opcoes} style={styles.opcNav} />

            </View>
*/}
            
            <Image source={imagemHeader} style={styles.imgCabecalho} />

        </View>
    )
};

const styles = StyleSheet.create({


//------------------------------------------------------------------------
    imgCabecalho: {
        width: "100%",
        height: 535 / 1000 * largura,
    },
})

export default Header;