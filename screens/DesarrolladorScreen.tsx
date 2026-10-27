import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DesarrolladorScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Desarrollador</Text>
            <Text>Nombre: Gerson Teran</Text>
            <Text>Edad: 22</Text>
            <Text>Carrera: Desarrollo de Software</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28dce9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize:25,
        fontWeight:'bold'
    }
})