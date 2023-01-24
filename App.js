import { StatusBar } from 'expo-status-bar';

import {  View,Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';

import {Category} from './component/Category.jsx';
import { MainBtn } from './Home_D/MainBtn';
import { Search } from './Home_D/Search';




export default function App() {


  const Stack = createNativeStackNavigator();


  return (
    <View style={{flex:1}}>
            <StatusBar style="auto" />
      <View style={{flex:0.1 }}><Search/></View>
      <SafeAreaView>
      <View style={{flex:0.5 }}>
      <NavigationContainer>
        <Stack.Navigator initalRouteName="MainBtn">
          <Stack.Screen name="MainBtn" component={MainBtn}/>
          <Stack.Screen name="Category" component={Category}/>
        </Stack.Navigator>
      </NavigationContainer>
      
        </View>
        </SafeAreaView>
        <View style={{flex:1}}></View>
    </View>

  )
  }

