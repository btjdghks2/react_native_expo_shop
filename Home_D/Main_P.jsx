import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'


export const Main_P = () => {

    const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Screen
    name="아우터"
    component={Outer}
    options={{
        title:'홈',
        tabBarIcon: ({color, size}) => (
            <Icon name="home" color={}
        )
    }}

  )
}
