import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import NumberGridView from '../components/numberGridView'

export default function BaydinViewScreen({ route, navigation }) {



    return (
        <>
            <View style={styles.card}>
                <Text style={styles.questionText}> {route.params.question.questionName}</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <NumberGridView questionNo={route.params.question.questionNo} navigation={navigation}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        minHeight: 100,
        backgroundColor: '#E6DDC4',
        marginTop: 10,
        justifyContent: 'center',
        marginHorizontal: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    questionText: {
        textAlign: 'center'
    },
})