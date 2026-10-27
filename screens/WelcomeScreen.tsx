import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen({ navigation }: any) {

    function irLogin() {
        navigation.navigate("Login")
    }
    function irDesarrollo() {
        navigation.navigate("Desarrollador")
    }


    return (
        <View style={styles.container}>
            <Text>Bienvenido</Text>
            <TouchableOpacity
                onPress={irLogin}
            >
                <Text>Login</Text>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={irDesarrollo}
            >
                <Text>Desarrolador</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#28dce9',
        alignItems: 'center',
        justifyContent:'center'
    }
})