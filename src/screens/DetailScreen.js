import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";
import Header from "../components/Header";

const windowWidth = Dimensions.get('window').width;

export default function DetailScreen({ navigation }) {
    return (
            <View style = {styles.container}>
                <Header/>
                <Text style = {styles.title}>Details Screen</Text>
                <View style = {styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {() => {
                            navigation.navigate('Home');
                            
                        }}
                        underlayColor={'#E49B0F'}
                    >
                        <Text style={{fontSize: 20, alignContent: 'center', justifyContent: 'center'}}>Go To Home</Text>
                    </TouchableHighlight>
                </View>

                <View style = {styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {() => navigation.navigate('Profile')}
                        underlayColor={'#E49B0F'}
                    >
                        <Text style={{fontSize: 20, alignContent: 'center', justifyContent: 'center'}}>Go To Profile</Text>
                    </TouchableHighlight>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#faf0e6',
    },

    title: {
        fontSize: 24,
        marginBottom: 20,
    },

    buttonContainer: {
        margin: 10, 
        width: windowWidth * 0.5,
        borderRadius: 5,
    },

    button: {
        borderRadius: '20px',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#FFC000',
    }
});