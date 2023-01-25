import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import { AiTwotoneSkin } from "react-icons/ai";
import { GiSleevelessJacket,GiArmoredPants } from "react-icons/gi";
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import { Outer } from './Outer_P'
import { Pants } from './Pants_P/Pants';
import { Shirt } from './Shirt_P/Shirt';

export const Main_P = () => {

    const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView>
    <NavigationContainer></NavigationContainer>
        <Tab.Navigator initialRouteName="아우터" ></Tab.Navigator>
    <Tab.Screen
    name="아우터"
    component={<Outer/>}
    options={{
        title:'아우터',
        tabBarIcon: ({color, size}) => 
            <Icon name= {<AiTwotoneSkin/>} color={white} size={} /> ,
            tabBarColor: 'black'
        
    }}
    />
    <Tab.Screen
    name="상의"
    component={<Shirt/>}
    options={{
        title:'상의',
        tabBarIcon: ({color, size}) => 
            <Icon name= {<GiSleevelessJacket/>} color={white} size={} /> ,
            tabBarColor: 'black'
        
    }}
    />
    <Tab.Screen
    name="하의"
    component={<Pants/>}
    options={{
        title:'하의',
        tabBarIcon: ({color, size}) => 
            <Icon name= {<GiArmoredPants/>} color={white} size={} /> ,
            tabBarColor: 'black'
        
    }}
    />
    </Tab.Navigator>
    </NavigationContainer>

  )
}
