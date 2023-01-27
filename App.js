

import {  View } from 'react-native';
import 'react-native-gesture-handler';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';

import { Main_P } from './Home_D/Main_P';




export default function App() {


  const Stack = createNativeStackNavigator();


  return (
    <View style={{flex:1}}>
    <SafeAreaView/>
    <Main_P/>
    </View>

  )
  }

