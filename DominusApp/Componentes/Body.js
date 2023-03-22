import React from "react";
import { Text, View, StyleSheet, Image, Dimensions, Button, Alert } from 'react-native';
import secagem from "../assets/Secagem3.jpg";
import coador from "../assets/coador2.png";
import cafezal from "../assets/cafezal.jpg";
import logoRodape from "../assets/logo.png"

const largura = Dimensions.get('screen').width

const Body = () => {
    return (
        <View style={styles.corpo}>

            <Text style={styles.frase}>"Domine seu paladar com a intensidade divina do café Dominus!"</Text>


            <Text style={styles.divisor}>__________________________________</Text>


            <View style={styles.cards}>

                <View style={styles.card}>
                    <Text style={styles.tituloCard}>Grãos selecionados</Text>
                    <Text style={styles.txtCard}>Nosso café é produzido com grãos selecionados, cultivados no Sítio Terra Boa.
                        Cada etapa do processo é cuidadosamente monitorada, desde a colheita até a torrefação.</Text>
                    <Image source={secagem} style={styles.imgCard} />
                </View>


                <View style={styles.card}>
                    <Text style={styles.tituloCard}>Um sabor Dominante</Text>
                    <Text style={styles.txtCard}>O café Dominus é uma obra-prima dos cafés.
                        Quando você leva a primeira xícara de café Dominus aos lábios, o sabor intenso envolve seu paladar.
                        Cada gole é uma experiência inesquecível.</Text>
                    <Image source={coador} style={styles.imgCard} />
                </View>

            </View>

            <View style={styles.botao}>

                <Button
                    color="#5c849e"
                    title="Comprar"
                    onPress={() => Alert.alert('Cabô o café')}
                />

            </View>

            <Text style={styles.divisor}>__________________________________________</Text>


            <View style={styles.fazenda}>

                <Text style={styles.tituloFazenda}>Sítio Terra Boa</Text>
                <Image source={cafezal} style={styles.imgFazenda} />

                <View style={styles.histfazenda}>

                    <Text style={styles.tituloFazenda2}>História</Text>
                    <Text style={styles.txtFazenda}>
                        O Sítio Terra Boa, localizado em Caratinga - MG,
                        é uma propriedade adquirida em 1999 por um casal de
                        professores residentes em Ipatinga.
                        A família foi investindo no sítio e tocando as
                        lavouras à distância, em parcerias agrícolas.
                        A família passava as férias com os filhos na roça,
                        e ali, eles brincavam e corriam livremente.
                    </Text>
                </View>

            </View>

            <Text style={styles.divisor}>__________________________________________</Text>

        </View>
    );
};

const styles = StyleSheet.create({

    corpo: {
        marginTop: 20,
        marginBottom: 20,
    },

    frase: {
        width: "100%",
        fontSize: 20,
        textAlign: "center"
    },

    divisor: {
        color: "#5c849e",
        alignSelf: 'center',
        letterSpacing: -1,

    },

    cards: {
        marginBottom: 20,
    },


    //----------------------------------------- ITEM 1 ------------------------------------------  
    card: {
        height: 250,
        width: "72%",
        alignSelf: "center",
        marginTop: 70,
        backgroundColor: "white",
        borderColor: "#5c849e",
        borderWidth: 3,
        borderRadius: 10,
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    tituloCard: {
        width: "80%",
        position: "absolute",
        fontSize: 22,
        textAlign: "center",
        fontWeight: "bold",
    },

    txtCard: {
        width: "80%",
        marginLeft: 20,
        marginTop: 35,
        textAlign: "left",
        fontSize: 19,
    },

    imgCard: {
        width: 100,
        height: 100,
        marginLeft: -20,
        marginTop: -50,
        borderRadius: 10,
    },

    //----------------------------------------- Btn ------------------------------------------  
    botao: {
        width: "72%",
        backgroundColor: "#5c849e",
        alignSelf: "center",
        borderRadius: 10,
    },

    //----------------------------------------- Fazenda ------------------------------------------  
    fazenda: {
        marginBottom: 20,
    },

    tituloFazenda: {
        fontSize: 30,
        alignSelf: "center",
        fontWeight: "bold",
        marginTop: 20,
    },

    tituloFazenda2: {
        fontSize: 30,
        alignSelf: "center",
        fontWeight: "bold",
        marginTop: 10,
    },

    histfazenda: {
        width: "85%",
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 10,
        borderColor: "#5c849e",
        borderWidth: 3,
        borderRadius: 10,

    },

    imgFazenda: {
        resizeMode: "stretch",
        width: "84%",
        height: 683 / 1024 * largura,
        borderRadius: 10,
        alignSelf: "center",
        margin: 30,
    },

    txtFazenda: {
        fontSize: 20,
        width: "90%",
        textAlign: "left",
        alignSelf: "center",
    },

})

export default Body;