import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notepage from './Screens/Notepage';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Notepage'
        screenOptions={{
          animation:'slide_from_right', 
          headerShown: false
        }}
      >
        <Stack.Screen name='Notepage' component={Notepage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
