import React from "react";
import { Text, View, StyleSheet } from "react-native"

const Body = () =>{
    return(
        <View>
            <Text style = {estilos.titulo}>Café</Text>
            <Text style = {estilos.corpo}>Que tal um café quentinho e saboroso para animar o seu dia? Se você é um amante de
                café, sabe que a escolha do grão e do método de preparo faz toda a diferença na qualidade da bebida. {"\n"}{"\n"}

                É por isso que queremos apresentar a você o nosso café especial! {"\n"}{"\n"}

                Nosso café é produzido com grãos selecionados, cultivados nas melhores regiões produtoras do país. 
                Cada etapa do processo é cuidadosamente monitorada, desde a colheita até a torrefação.
                </Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    corpo: {
        alignSelf: "center",
        width: "90%",
        fontSize: 20,
        textAlign: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#A4A4A4",
        backgroundColor: "white",
        marginBottom: 60,
        padding: 6,
        
    },
    titulo:{
        fontSize: 35,
        textAlign: "center",
        color: "white",
        backgroundColor: "black",
        borderRadius: 10,
        width: "40%",
        alignSelf: "center",
        marginBottom: 10,
    }
});

export default Body;