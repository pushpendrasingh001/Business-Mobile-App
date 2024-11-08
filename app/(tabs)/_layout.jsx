import {Tabs} from 'expo-router'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
export default function TabLayout() {
  return (
<Tabs screenOptions={{headerShown:false,tabBarActiveTintColor:Colors.PRIMARY}}>
  <Tabs.Screen   name='home'
  options={{
    tabBarLabel:'Home',
    tabBarIcon: ({ color }) => (<Entypo name="home" size={24} color={color} />
     
    ),
  }}
   />
  <Tabs.Screen   name='search'
   options={{
    tabBarLabel:'Search',
    tabBarIcon: ({ color }) => (<Feather name="search" size={24} color={color} />
     
    ),
  }} />
  <Tabs.Screen   name='profile'
   options={{
    tabBarLabel:'Profile',
    tabBarIcon: ({ color }) => (<Ionicons name="people-circle-outline" size={24} color={color} />
     
    ),
  }} />
</Tabs>
  )
}