import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AddService from '../AddService'
import BookAppoint from '../BookAppoint'
import DetectMyLoc from '../DetectMyLoc'
import ScheduleService from '../ScheduleService'

const Stack = createStackNavigator();

const ServicesMain = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'black',
                    // tabBarBackgroundColor: 'pink',
                    // tabBarActiveBackgroundColor: 'yellow',
                    // tabBarInactiveBackgroundColor: 'cyan',
                    tabBarStyle: { backgroundColor: '#00A659', paddingBottom: 8, paddingTop: 4, height: 50 },
                    tabBarShowLabel: false,
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerStyle: { backgroundColor: '#00A659' },
                }}

            >
                <Stack.Screen name="AddService" component={AddService} />
                <Stack.Screen name="BookAppoint" component={BookAppoint} />
                <Stack.Screen name="DetectMyLoc" component={DetectMyLoc} />
                <Stack.Screen name="ScheduleService" component={ScheduleService} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default ServicesMain

const styles = StyleSheet.create({})