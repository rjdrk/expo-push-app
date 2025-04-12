import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import { useLocalSearchParams } from 'expo-router'

const ChatIdScreen = () => {
    const { id } = useLocalSearchParams();
    return (
        <View style={styles.container}>
            <ThemedText style={styles.text}>Chat ID Screen</ThemedText>
            <ThemedText style={styles.text}>Chat ID: {id}</ThemedText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    text: {
        fontSize: 25,
        marginBottom: 10
    }
})

export default ChatIdScreen