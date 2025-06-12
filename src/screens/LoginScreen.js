import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get('window').width;
// AsyncStorage.clear();
export default function LoginScreen({ navigation }) {
    useEffect(() => {
    async function loadData() {
        await AsyncStorage.setItem("User0", "admin");
        await AsyncStorage.setItem("Pass0", "admin");
        const rawValue = await AsyncStorage.getItem("accounts");
        if (rawValue !== null) {
            const accounts = parseInt(rawValue);
            AsyncStorage.setItem("accounts", accounts.toString());
        }
    }

    loadData();
}, []);

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Welcome to My Navigation App!</Text>
            <Text style = {styles.title}>Login</Text>
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
                    alert("Insert the information to complete the log in");
                    return;
                }
                else{
                    // a senha é case sensitive, mas o nome não
                    let numAccounts = parseInt(await AsyncStorage.getItem("accounts")) || 0;
                    let accountFound = false;
                    for(let i = 0; i <= numAccounts; i++){
                        const savedAccount = await AsyncStorage.getItem(`User${i}`);
                        const savedPass = await AsyncStorage.getItem(`Pass${i}`);
                        if(nome.toLowerCase() === savedAccount.toLowerCase() && senha === savedPass){
                            accountFound = true;
                            await AsyncStorage.setItem("CUser", await AsyncStorage.getItem(`User${i}`));
                            alert(`Logged in as ${savedAccount}`)
                            navigation.navigate("Home");
                            return;
                        }
                        else if (nome.toLowerCase() === savedAccount.toLowerCase() && senha !== savedPass){
                            alert("Incorrect password!");
                            accountFound = true;
                        }
                    }
                    
                    if(!accountFound){
                        alert("Account not found...");
                        accountFound = false;
                    }
                    

                }

            }}
        >
            <Text style={{fontSize: 25}}>Enviar</Text>
        </TouchableOpacity>
        <Text style = {{fontSize: 30}}>Doesn't have an account? Create one here!</Text>
        
        <TouchableOpacity
            
            style={styles.button2}
            onPress={() => navigation.navigate("SignUp")}
        >
            <Text style={{fontSize: 25}}>Sign Up</Text>
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
        borderRadius: '20px',
        justifyContent:'center',
        alignItems: 'center',
        width: windowWidth * 0.5,
        backgroundColor: '#98FB98',
    },

    button2: {
        borderRadius: 5,
        justifyContent:'center',
        alignItems: 'center',
        width: windowWidth * 0.5,
        backgroundColor: '#AFEEEE',
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