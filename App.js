import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView from 'react-native-maps';
import Find from './screens/Find.js';
import Home from './screens/Home.js';
import Mark from './screens/Mark.js';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    // <ScreenTwo>
    //   <ScreenThree />
    // </ScreenTwo>
    
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false

        }}>
       
       <Stack.Screen name='Screen1' component={Home} />
        <Stack.Screen name='Screen2' component={Find} />
        <Stack.Screen name='Screen3' component={Mark} /> 
       
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
