import React, {useState} from "react";
import { View, Text, StyleSheet, Dimensions, TouchableHighlight, TextInput, TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get('window').width;
export default function LoginScreen({ navigation }) {

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Welcome to My Navigation App!</Text>

        <TextInput
            style={styles.input}
            keyboardType="default"
            placeholder="insira o seu email..."
            value={nome}
            onChangeText={setNome}
        />

        <TextInput
            style={styles.input}
            keyboardType="default"
            placeholder="insira a sua senha..."
            value={senha}
            onChangeText={setSenha}
            secureTextEntry = {true}
        />

        <TouchableOpacity
            style={styles.button}
            onPress = {() => {

                if(senha && nome){

                    navigation.navigate("Home");

                }

            }}
        >
            <Text style={{fontSize: 30}}>Enviar</Text>
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

    input: {

        width: windowWidth * 0.8,
        fontSize: 20,
        margin: '2%',
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 15

    }
});