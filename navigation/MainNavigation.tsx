import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import DesarrolladorScreen from "../screens/DesarrolladorScreen";
import ListasScreen from "../screens/ListasScreen";
import MusicaScreen from "../screens/MusicaScreen";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack(){
    return(
        <Stack.Navigator >
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Desarrollador" component={DesarrolladorScreen}/>
            <Stack.Screen name="Tab" component={MyTab} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

function MyTab() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Lista" component={ListasScreen}/>
            <Tab.Screen name="Musica" component={MusicaScreen}/>
        </Tab.Navigator>
    )
}

export function MyNav(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}

