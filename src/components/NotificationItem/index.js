import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const NotificationItem = ({ title, desc }) => {
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{desc}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 7,
        paddingHorizontal:12
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        // color:'black'
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        marginTop: 3,
        // color:'black'

    }
})

export default NotificationItem