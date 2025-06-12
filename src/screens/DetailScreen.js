import React, { useState,useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";
import Header from "../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get('window').width;

export default function DetailScreen({ navigation }) {
    let clear = false;
    const [currentUser, setCurrentUser] = useState("");

    useEffect(() => {
        const startUser = async () => {
            setCurrentUser(await AsyncStorage.getItem("CUser"));
        }
        startUser();
    },[]);

    const createUserArray = async () => {
        var array = [];
        let accounts = await AsyncStorage.getItem("accounts");
        if(await AsyncStorage.getItem("CUser") != "admin"){
            for(let i = 1; i <= accounts; i++){
                array[i] = await AsyncStorage.getItem(`User${i}`);
                if (i != accounts){
                    array[i] += ", ";
                }
            }
        }
        else{
            for(let i = 1; i <= accounts; i++){
                array[i] = `User: ${await AsyncStorage.getItem(`User${i}`)}; Password: ${await AsyncStorage.getItem(`Pass${i}`)}`;
                if (i != accounts){
                    array[i] += ", ";
                }
            }
        }
        return array;
    }

    const users = createUserArray();
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

                <View style={{marginLeft: 45,}}>
                    <Text style={styles.title}>
                        Authenticated Users:
                    </Text>


                    <Text style={{
                        fontSize: windowWidth * 0.07,
                        color: "#8B4000",
                    }}>
                        {users}
                    </Text>



                </View>
                    {currentUser == "admin" && <TouchableHighlight
                        style={{borderRadius: 5,
                            justifyContent:'center',
                            alignItems: 'center',
                            backgroundColor: '#880808',
                        }}
                        underlayColor={"#4A0404"}
                        onPress={() => {
                            if(!clear){
                                clear = true;
                                alert("Doing this will clear all the accounts currently authenticated. Click again to confirm.");
                            }
                            else{
                                alert("Cleared accounts.")
                                AsyncStorage.clear();
                                clear = false;
                                AsyncStorage.setItem("User0", "admin");
                                AsyncStorage.setItem("Pass0", "admin");
                                AsyncStorage.setItem("CUser", "admin");
                            }
                        }}
                    >
                        <Text style={{color: '#FFF5EE', fontSize: 20, margin: 5,}}>Clear all accounts</Text>
                    </TouchableHighlight>}
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
        borderRadius: 5,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#FFC000',
    },

    users: {
        fontSize: 25,
        color: "red",
    },
});