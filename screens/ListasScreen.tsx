import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onValue, push, ref, set } from 'firebase/database';
import { auth, db } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import Card from '../components/Card';

export default function ListasScreen() {

    const [nombreLista, setNombreLista] = useState("")
    const [misListas, setMisListas] = useState<any[]>([])

    function guardarLista() {
        if (!auth.currentUser) return Alert.alert("Error", "Debe estar logeado")
        push(ref(db, `listas/${auth.currentUser.uid}/misListas`), {
            nombrelista: nombreLista,

        });
        setNombreLista("")
    }

    function leerLista() {
        if (!auth.currentUser) return;
        const starCountRef = ref(db, `listas/${auth.currentUser.uid}/misListas`);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const arreglo = Object.keys(data).map(key=> ({
                id:key,
                ...data[key]
            }))
            setMisListas(arreglo)
            }else{
                setMisListas([])
            }
            

        });
        
    }

    useEffect(() => {
        leerLista()
    }, [])




    return (
        <View>
            <Text>Listas</Text>
            <TextInput placeholder='Ingrese un nuevo nombre'
                value={nombreLista}
                onChangeText={(texto) => setNombreLista(texto)}
            />
            <Button title='Crear nueva lista' onPress={guardarLista} />
            <FlatList
                data={misListas}
                keyExtractor={(item)=> item.id}
                renderItem={({ item }) => (
                    <Card datos={item} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})