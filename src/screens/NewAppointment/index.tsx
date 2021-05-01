import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/core';

import useAuth from '../../hooks/useAuth';


const NewAppointment = () => {

    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState(false);

    const { user } = useAuth()

    const { navigate } = useNavigation()

    useEffect(() => {
        handlePermission()
    }, []);

    async function handlePermission() {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    }

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const handleBarCodeScanned = ({ data }: any) => {
        setScanned(true);
        
        Alert.alert('Sucesso', `Seu horário foi computado... ${new Date().getHours()}:${new Date().getMinutes()} `)

        const dados = {
            id_empresa: data.id_empresa,
            email: user?.email
        }

        navigate('home')

    };

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});
export default NewAppointment;