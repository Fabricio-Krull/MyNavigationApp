import React, {useState} from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const windowWidth = Dimensions.get('window').width;
export default function LoginScreen({ navigation }) {
    
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Sign up to autenticate your account!</Text>

        <TextInput
            style={styles.input}
            keyboardType="default"
            placeholder="here goes your username..."
            value={nome}
            onChangeText={setNome}
        />

        <TextInput
            style={styles.input}
            keyboardType="default"
            placeholder="here goes your password..."
            value={senha}
            onChangeText={setSenha}
            secureTextEntry = {true}
        />

        <TouchableOpacity
            style={styles.button}
            onPress = {async () => {
                if (!senha && !nome){
                    alert("Insert the information to complete the signing up");
                }
                else if(senha && nome){
                    // a senha é case sensitive, mas o nome não
                    let nAccounts = parseInt(await AsyncStorage.getItem("accounts")) || 0;
                    nAccounts++

                    alert(`User authenticated as: ${await AsyncStorage.getItem(`User${nAccounts}`)}`);
                    await AsyncStorage.setItem("accounts", nAccounts.toString());
                    await AsyncStorage.setItem(`User${nAccounts}`, nome.toString());
                    await AsyncStorage.setItem(`Pass${nAccounts}`, senha.toString());

                    navigation.navigate("Login");

                }

            }}
        >
            <Text style={{fontSize: 30}}>Enviar</Text>
        </TouchableOpacity>

        <Text style = {{fontSize: 30}}>Have an account already? Log in here!</Text>

            <TouchableOpacity
                
                style={styles.button2}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={{fontSize: 25}}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ECFFDC',
    },

    title: {
        fontSize: 40,
        margin: 20,
    },

     buttonContainer: {
        margin: 10, 
        width: windowWidth * 0.9,
        borderRadius: 5,
    },

    button: {
        borderRadius: 5,
        justifyContent:'center',
        alignItems: 'center',
        width: windowWidth * 0.5,
        backgroundColor: '#AFEEEE',
    },

        button2: {
        borderRadius: 5,
        justifyContent:'center',
        alignItems: 'center',
        width: windowWidth * 0.5,
        backgroundColor: '#98FB98',
    },

    input: {

        width: windowWidth * 0.8,
        fontSize: 20,
        margin: '2%',
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 15

    }
});