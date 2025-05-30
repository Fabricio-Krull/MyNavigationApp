import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableHighlight,  } from "react-native";
import Header from "../components/Header";

const windowWidth = Dimensions.get('window').width;
let login = true;
export default function HomeScreen({ navigation }) {
            
            return (
                <View style = {styles.container}>
                    {!login && <Header/>
                    // Se o usuário veio da tela de login, o header não é renderizado.
                    }
                    <Text style = {styles.title}>Home Screen</Text>
                    <View style = {styles.buttonContainer}>
                        <TouchableHighlight
                            style={styles.button}
                            onPress = {() => {
                                navigation.navigate('Details');
                                login = false;
                                // Da primeira tela, qualquer troca de tela diz ao aplicativo que não viemos 
                                // Mais da tela de login, então o valor de 'login' é definido para false.
                            }}
                            underlayColor={'#0047AB'}
                        >
                            <Text style={{fontSize: 20, alignContent: 'center', justifyContent: 'center'}}>Go To Details</Text>
                        </TouchableHighlight>
                    </View>

                    <View style = {styles.buttonContainer}>
                        <TouchableHighlight
                            style={styles.button}
                            onPress = {() => {
                                navigation.navigate('Profile');
                                login = false;
                                // Da primeira tela, qualquer troca de tela diz ao aplicativo que não viemos 
                                // Mais da tela de login, então o valor de 'login' é definido para false.
                            }}
                            underlayColor={'#0047AB'}
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
        backgroundColor: '#f0f8ff',
    },

    title: {
        fontSize: 24,
        marginBottom: 20,
    },

    buttonContainer: {
        margin: 10, 
        width: windowWidth * 0.5,
        borderRadius: 5,
        borderRadius: '15px',
    },

    button: {
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#0096FF',
    }
});