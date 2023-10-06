import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import { Ionicons } from '@expo/vector-icons';
import BaydinViewScreen from './src/screens/BaydinViewScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            <Tab.Screen name="ဗေဒင်" component={HomeScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" size={size} color={color} />
                )
            }} />
            <Tab.Screen name="Search" component={SearchScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="search" size={size} color={color} />
                )
            }} />
        </Tab.Navigator>
    );
}

export default function Root() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: true, headerBackTitleVisible: false }}>
                    <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} />
                    <Stack.Screen name="Baydin View Screen" component={BaydinViewScreen} options={{ headerShown: true, title: 'ဗေဒင်' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}