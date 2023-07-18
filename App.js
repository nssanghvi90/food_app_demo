
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './src/screens/menu/MenuScreen';
import CheckoutScreen from './src/screens/checkout/CheckoutScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const Stack = createNativeStackNavigator();

export default function App() { 
  return (    
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name="Menu" component={MenuScreen}/>
          <Stack.Screen name="Cart" component={CheckoutScreen} />
        </Stack.Navigator>
      </NavigationContainer>  
    </Provider>     
  ); 
}