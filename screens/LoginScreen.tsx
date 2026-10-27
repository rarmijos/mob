import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export default function LoginScreen({navigation}:any) {

    const [correo, setCorreo] = useState("")
    const [contrasenia, setContrasenia] = useState("")

    function login() {
        signInWithEmailAndPassword(auth, correo, contrasenia)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                
                Alert.alert("Bienvenido", "Credenciales ingresadas correctamente")
                navigation.navigate("Tab")
                setCorreo("")
                setContrasenia("")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        setCorreo("")
        setContrasenia("")
    }


    return (
        <View>
            <Text>Login</Text>
            <TextInput
                placeholder='Ingrese su correo'
                value={correo}
                onChangeText={(text) => setCorreo(text)}
            ></TextInput>
            <TextInput
                placeholder='Ingrese su contrasenia'
                value={contrasenia}
                onChangeText={(text) => setContrasenia(text)}

            ></TextInput>

            <Button title='Ingresar' onPress={()=> login()} />
        </View>
    )
}

const styles = StyleSheet.create({})