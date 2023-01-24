import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Category } from '../component/Category';


export const MainBtn = ({navigation}) => {


return (
        
    <View style={{backgroundColor:'white',flexDirection: "row" , justifyContent:'space-around'}}>   
    <TouchableOpacity onPress={() => navigation.push('Category')} >
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
)
}


const styles = StyleSheet.create({

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
  