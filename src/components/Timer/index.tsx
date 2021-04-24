import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'

const Timer = () => {

    const [hour, setHour] = useState<string>('')
    const [minutes, setMinutes] = useState<string>('')

    useEffect(() => {
        setInterval(() => {
            setHour(`${new Date().getHours()}`)
            setMinutes(`${new Date().getMinutes()}`)
        }, 1000)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.boxNumber}>
                <Text style={styles.number}>{hour}</Text>
            </View>
            <Text style={styles.point}>:</Text>
            <View style={styles.boxNumber}>
                <Text style={styles.number}>{+minutes < 10 ? `0${minutes}` : minutes}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxNumber: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#eee',
        borderRadius: 8
    },

    number: {
        fontSize: 156
    },

    point: {
        fontSize: 128,
        marginHorizontal: 8
    }
})

export default Timer