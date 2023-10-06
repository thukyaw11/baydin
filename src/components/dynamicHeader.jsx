import { Animated, StyleSheet, Text } from "react-native";

const Header_Max_Height = 240;
const Header_Min_Height = 120;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;

const DynamicHeader = ({ value }) => {

    const animatedHeaderHeight = value.interpolate({
        inputRange: [0, Scroll_Distance],
        outputRange: [Header_Max_Height, Header_Min_Height],
        extrapolate: 'clamp'
    })

    const animatedHeaderColor = value.interpolate({
        inputRange: [0, Scroll_Distance],
        outputRange: ['#181D31', '#678983'],
        extrapolate: 'clamp'
    })

    return (
        <Animated.View style={[styles.header,
        {
            height: animatedHeaderHeight,
            backgroundColor: animatedHeaderColor
        }
        ]}>
            {/* <Image source={require('../../assets/mintheinkha_logo.png')} style={styles.headerImg} /> */}
            <Text style={styles.title}>💫 မင်းသိင်္ခ / လက်ထောက်ဗေဒင်</Text>
        </Animated.View>
    );
}


const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        paddingTop: 25
    },
    title: {
        marginTop: 10,
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 20
    },
})

export default DynamicHeader;