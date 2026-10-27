import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Card(props:any) {
    const {datos}=props;

    const [modal, setModal] = useState(false)

  return (
    <TouchableOpacity
        onPress={()=> setModal(true)}
    >
        <Text>{datos.nombrelista}</Text>

        <Modal visible={modal}>

            <Text>Lista: {datos.nombrelista}</Text>
            <Button title='Cerrar'
            onPress={()=> setModal(false)}
        />
        </Modal>
        
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})