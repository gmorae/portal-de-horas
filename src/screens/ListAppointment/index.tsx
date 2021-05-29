import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export default function History() {

    const points = [
        {
            date: '12/05/2021',
            weekday: 'Segunda-Feira',
            entryOne: '09:00',
            exitOne: '12:00',
            entryTwo: '13:00',
            exitTwo: '17:00'
        },
        {
            date: '13/05/2021',
            weekday: 'Terça-Feira',
            entryOne: '09:00',
            exitOne: '12:00',
            entryTwo: '13:00',
            exitTwo: '17:00'
        },
        {
            date: '14/05/2021',
            weekday: 'Quarta-Feira',
            entryOne: '09:00',
            exitOne: '12:00',
            entryTwo: '13:00',
            exitTwo: '17:00'
        },
        {
            date: '15/05/2021',
            weekday: 'Quinta-Feira',
            entryOne: '09:00',
            exitOne: '12:00',
            entryTwo: '13:00',
            exitTwo: '17:00'
        },
        {
            date: '16/05/2021',
            weekday: 'Sexta-Feira',
            entryOne: '09:00',
            exitOne: '12:00',
            entryTwo: '13:00',
            exitTwo: '17:00'
        },
        {
            date: '17/05/2021',
            weekday: 'Segunda-Feira',
            entryOne: '09:00',
            exitOne: '12:00',
            entryTwo: '13:00',
            exitTwo: '17:00'
        },
        {
            date: '18/05/2021',
            weekday: 'Terça-Feira',
            entryOne: '09:00',
            exitOne: '12:00',
            entryTwo: '13:00',
            exitTwo: '17:00'
        },
        {
            date: '19/05/2021',
            weekday: 'Quarta-Feira',
            entryOne: '09:00',
            exitOne: '12:00',
            entryTwo: '13:00',
            exitTwo: '17:00'
        },
    ]

    const { navigate } = useNavigation()

    return (
        <View style={styles.background}>
            <View style={styles.header}>
            <Ionicons onPress={() => navigate('home')} name="arrow-back-outline" size={24} color="#000" />
            <Text style={styles.text}>Meus pontos computados</Text>
            
            </View>
            <ScrollView style={styles.contentHistories}>
                {
                    points.map((point, index) => (
                        <View style={styles.point} key={index}>
                            <View style={styles.hours}>
                                <Text style={styles.weekday}>
                                    {point.date}
                                    {'\n'}
                                    {point.weekday}
                                </Text>
                                <Text style={styles.hoursText}>{point.entryOne}</Text>
                                <Text style={styles.hoursText}>{point.exitOne}</Text>
                                <Text style={styles.hoursText}>{point.entryTwo}</Text>
                                <Text style={styles.hoursText}>{point.exitTwo}</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    text: {
        color: '#000',
        fontSize: 24,
        marginLeft: 32
    },
    contentHistories: {
        marginTop: 16,
        flex: 1,
        width: '100%',
    },
    point: {
        backgroundColor: '#f1f3f3',
        marginBottom: 8,
        borderRadius: 8,
        padding: 16,

    },
    weekday: {
        color: '#777',
        fontSize: 14
    },
    hours: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    hoursText: {
        fontWeight: 'bold',
        fontSize: 16
    },
});