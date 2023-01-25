import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import { Kart } from './Side_Profill/Kart';
import { Profill } from './Side_Profill/Profill';
import { CashControll } from './Side_Profill/CashControll';
import { QnA } from './Side_Profill/QnA';

export const Side = () => {

    const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
        <Drawer.Navigator
        initialRouteName="내정보"
        drawerPosition="left"
        backBehavior="history"
        screenOptions={{
            drawerActiveBackgroundColor: 'aqua',
            drawerActiveTintColor:'white',
            
        }}
        >
        <Drawer.Screen name="내정보" component={Profill} />
        <Drawer.Screen name="장바구니" component={Kart} />
        <Drawer.Screen name="결제관리" component={CashControll} />
        <Drawer.Screen name="고객관리" component={QnA} />
        </Drawer.Navigator>
    </NavigationContainer>

  )
}
