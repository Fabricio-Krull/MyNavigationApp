import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";
import Header from "../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get('window').width;
let login = true;

export default function HomeScreen({ navigation }) {
  const [name, setName] = useState('');

  useEffect(() => {
    const getUsername = async () => {
      try {
        const storedName = await AsyncStorage.getItem('name');
        if (storedName !== null) {
          setName(storedName);
        }
      } catch (e) {
        alert("Deu erro pai");
      }
    };

    getUsername();
  }, []);

  return (
    <View style={styles.container}>
      {!login && <Header />}
      <Text style={styles.title}>Seja bem-vindo</Text>

      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            navigation.navigate('Details');
            login = false;
          }}
          underlayColor={'#0047AB'}
        >
          <Text style={{ fontSize: 20 }}>Go To Details</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            navigation.navigate('Profile');
            login = false;
          }}
          underlayColor={'#0047AB'}
        >
          <Text style={{ fontSize: 20 }}>Go To Profile</Text>
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