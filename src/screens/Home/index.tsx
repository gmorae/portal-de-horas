import React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';

import Button from '../../components/Button';
import Timer from '../../components/Timer'

const Home = () => {

    function handleNewAppointment() {
        Alert.alert('Sucesso', `Seu horário foi computado... ${new Date().getHours()}:${new Date().getMinutes()} `)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Bem vindo,{'\n'}
                Gabriel
            </Text>

            <Timer />

            <Button
                text="Bater ponto"
                variant="success"
                onPress={handleNewAppointment}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 24,
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 128
    },
    button: {
        width: '100%',
        backgroundColor: 'green',
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
        borderRadius: 4
    },
    buttonText: {
        fontSize: 24,
        color: '#FFF'
    }
})

export default Home