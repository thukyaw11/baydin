import { FlatGrid } from 'react-native-super-grid';
import { Text, View, StyleSheet, TouchableOpacity, Pressable, Aler, Button } from 'react-native';
import { numberList } from '../data/baydin-mintheinkha';
import { useState } from 'react';
import { answers } from '../data/baydin-mintheinkha';
import mm2en from '../helper/burmeseNumToEn';
import delay from '../helper/delay';
import AnimatedLoader from 'react-native-animated-loader';




const NumberGridView = ({ navigation, ...props }) => {
    const [answer, setAnswer] = useState('');
    const [isLoading, setLoading] = useState(false);
    TouchableOpacity.defaultProps = { ...(TouchableOpacity.defaultProps || {}), delayPressIn: 0 };

    const gotoHome = () => {
        navigation.navigate('Home')
    }


    const numberListRenderItem = (number) => {
        const getAnswerwithNumber = async () => {
            setLoading(true);
            await delay(2000)
            setLoading(false);
            const filteredData = await answers.filter((answer) => answer.questionNo == props.questionNo && answer.answerNo == mm2en(number));
            setAnswer(filteredData[0].answerResult);
        }
        return (
            <TouchableOpacity onPress={() => getAnswerwithNumber()}>
                <View style={styles.numberCard}>
                    <Text>{number}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <>
            {isLoading ?
                <AnimatedLoader
                    visible={isLoading}
                    overlayColor="rgba(255,255,255,0.75)"
                    animationStyle={styles.lottie}
                    speed={1}>
                    <Text style={{marginTop: 20}}>တွက်ချက်နေသည် ...</Text>
                </AnimatedLoader>
                :
                <>
                    {answer ?
                        <>
                            <View style={styles.card}>
                                <Text style={{ textAlign: 'center', fontSize: 40 }}>🍀</Text>
                                <Text style={{ textAlign: 'center', fontSize: 18 }}>{answer}</Text>
                            </View>
                            <View style={styles.askAgainContainer}>
                                <Pressable style={styles.askAgainButton} onPress={() => gotoHome()}>
                                    <Text style={styles.askAgainButtonText}>ပြန်မေးမယ်</Text>
                                </Pressable>
                            </View>

                        </>


                        :
                        <FlatGrid
                            itemDimension={40}
                            data={numberList}
                            renderItem={({ item }) => (numberListRenderItem(item))}
                        />

                    }
                </>
            }
        </>

    );
}

export default NumberGridView;

const styles = StyleSheet.create({

    card: {
        minHeight: 100,
        maxWidth: '95%',
        backgroundColor: '#fff',
        marginTop: 10,
        justifyContent: 'center',
        marginHorizontal: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    numberCard: {
        height: 45,
        width: 45,
        backgroundColor: '#fff',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    askAgainContainer: {
        marginTop: 30,

    },
    askAgainButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    askAgainButtonText: {
        fontSize: 16,
        lineHeight: 30,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    lottie: {
        width: 100,
        height: 100,
      },

})