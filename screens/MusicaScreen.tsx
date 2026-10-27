import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card2 from '../components/Card2';

export default function MusicaScreen() {
 

    const URL = "https://jritsqmet.github.io/web-api/assets/json/musica2.json"
    const [datos, setDatos] = useState<any[]>([])



    async function leerDatos() {
        const resp = await fetch(URL);
        const json = await resp.json();
        setDatos(json.musica);
        console.log(json.datos);
        
    }

    useEffect(() => {
    
    leerDatos()
    }, [])
    


    return (
        <View>
            <Text>Musica</Text>
            <FlatList
                data={datos}
                renderItem={({item}) =>(
                    <Card2 dato={item}/>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})