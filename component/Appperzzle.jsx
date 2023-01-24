import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Image } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Category } from './component/Category';


export default function App({navigation}) {
  const [text, onChangeText] = useState();

  const Stack = createNativeStackNavigator();
  
  return (
    
    <View style={{flex:0.7}}>
            <StatusBar style="auto" />
      <View style={{flex:0.4 ,backgroundColor:'blue'}}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      /></View>
      <View style={{flex:0.2 ,backgroundColor:'white',flexDirection: "row" , justifyContent:'space-around'}}>    
      <NavigationContainer>
        <Stack.Screen
          name="Category"
          component={Category}
        />
        
        
    </NavigationContainer>

    <TouchableOpacity onPress={() => navigation.navigation('Category')} >
          <View style={styles.button}>
            <Text style={styles.buttonText}>건축자제</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Category} >
          <View style={styles.button}>
            <Text style={styles.buttonText}>가구</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Category} >
          <View style={styles.button}>
            <Text style={styles.buttonText}>데스크셋</Text>
          </View>
        </TouchableOpacity>
        
    </View>
      <View style={{flex:1 ,backgroundColor:'red'}}><Image source={require('./interior.jpg')} /></View>
      <View style={{flex:1 ,backgroundColor:'pink'}}><Text>랭킹</Text></View>
<View><Text>카드스타일 상품등록예정</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    marginTop: 35,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
  },
  button: {
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    borderRadius : 15,

  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    marginTop:2,
    fontSize: 22,
  },
});
