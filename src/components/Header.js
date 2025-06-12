import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const text = "Back";

export default function Header( { navigation } ){
    navigation = useNavigation();

    return(

        <View style={styles.container}>

            <TouchableOpacity
                style={styles.button}
                onPress = {() => navigation.goBack()}
            >   
                <View style={{display: 'flex',flexDirection: 'row', height: 'auto'}}>
                    <Image 
                        style={styles.image}
                        source={require('../images/goBack.png')}
                    ></Image>
                    <Text style={{fontSize: 30}}>{text}</Text>
                </View>

            </TouchableOpacity>

        </View>

    )

}

const styles = StyleSheet.create({

    container: {

        width: windowWidth,
        height: '15%',
        top: windowHeight * -0.27,

    },
    button: {

        width: windowWidth * 0.8

    },
    image: {

        height: '100%',
        width: '30%'

    }


});