import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Card2(props:any) {
    const {dato}=props
  return (
    <TouchableOpacity>
        <View style={styles.container}>
        <Text>{dato.title}</Text>
        <Image style={styles.image} source={{uri:dato.album.cover_art_url}} />
        <Text>Duracion: {dato.duration} min</Text>
        <Button title='Agregar'/>
        </View>
        
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        margin:20,
        backgroundColor:'#58d220',
        alignItems:'center'
    },
    image:{
        width:300,
        height:300
    }
})