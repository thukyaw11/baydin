import React, { useRef } from 'react'
import { View, Text, ScrollView, StyleSheet, Animated, Image, TouchableOpacity } from 'react-native'
import { questions } from '../data/baydin-mintheinkha'
import DynamicHeader from '../components/dynamicHeader'



export default function HomeScreen({route, navigation}) {
    const scrollOffsetY = useRef(new Animated.Value(0)).current;

    const gotoBaydinView = (question) => {
        navigation.navigate("Baydin View Screen", {
            question: question
        });
    }

    return (
        <View style={{ flex: 1 }}>
            <DynamicHeader value={scrollOffsetY} />
            <ScrollView
                scrollEventThrottle={5}
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollOffsetY } } }
                ],
                    {
                        useNativeDriver: false
                    }
                )}
            >
                {
                    questions.map(val => {
                        return (

                            <TouchableOpacity onPress={() => gotoBaydinView(val)} key={val.questionNo}>
                                <View style={styles.card} >
                                    <Text style={styles.subtitle} >🍀 {val.questionName}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
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
        paddingVertical: 10

    },
    subtitle: {
        color: '#181D31',
        fontWeight: 'bold'
    },
  
    headerImg: {
        resizeMode: 'contain',
        height: 100,
        width: 200,
    }
})