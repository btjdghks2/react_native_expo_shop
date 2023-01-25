import { StatusBar } from 'expo-status-bar';

import {  View,Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';

import { Main_P } from './Home_D/Main_P';




export default function App() {


  const Stack = createNativeStackNavigator();


  return (
    <View style={{flex:1}}>

    </View>

  )
  }

