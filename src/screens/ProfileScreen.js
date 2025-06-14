import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";
import Header from "../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen({ navigation }) {
    return (
            <View style = {styles.container}>
                <Header/>
                <Text style = {styles.title}>Profile Screen</Text>
                <View style = {styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {() => navigation.navigate('Home')}
                        underlayColor={'#CF9FFF'}
                    >
                        <Text style={{fontSize: 20, alignContent: 'center', justifyContent: 'center'}}>Go To Home</Text>
                    </TouchableHighlight>
                </View>

                <View style = {styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {() => navigation.navigate('Details')}
                        underlayColor={'#CF9FFF'}
                    >
                        <Text style={{fontSize: 20, alignContent: 'center', justifyContent: 'center'}}>Go To Details</Text>
                    </TouchableHighlight>
                </View>

                <View>
                    <Text style = {{fontSize: 20}}>
                        Currently logged as: {AsyncStorage.getItem("CUser")}
                    </Text>
                </View>
                <View style = {styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        underlayColor={'#ED1C24'}
                        onPress={() => {
                            AsyncStorage.removeItem("CUser");
                            navigation.navigate("Login");
                        }}
                    >
                        <Text style={{fontSize: 20, alignContent: 'center', justifyContent: 'center'}}>Logout</Text>
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
        backgroundColor: '#e6e6fa',
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
        backgroundColor: '#CBC3E3',
        borderRadius: 5,
    }
});