import React from 'react'
import { View,Text } from 'react-native'

export default function BaydinViewScreen({route, navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>BayDin {route.params.question.questionName}</Text>
        </View>
    )
}
