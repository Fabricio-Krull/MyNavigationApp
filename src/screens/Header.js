import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get('window').width;
const text = "<<< Voltar";

export default function Header( { navigation } ){
    navigation = useNavigation();

    return(

        <View style={styles.container}>

            <TouchableOpacity
                style={styles.button}
                onPress = {() => navigation.goBack()}
            >
                <Text style={{fontSize: 30}}>{text}</Text>
            </TouchableOpacity>

        </View>

    )

}

const styles = StyleSheet.create({

    container: {

        width: windowWidth,
        height: '15%',
        top: '-30%'

    },
    button: {

        width: windowWidth * 0.5

    }


});