import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';

import BaydinViewScreen from './src/screens/BaydinViewScreen';

const Stack = createStackNavigator();


export default function Root() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: true, headerBackTitleVisible: false }}>
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Baydin View Screen" component={BaydinViewScreen} options={{ headerShown: true, title: 'ဗေဒင်' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}