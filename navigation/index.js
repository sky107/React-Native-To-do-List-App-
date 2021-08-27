import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
//always remember its {}

import { createStackNavigator } from "@react-navigation/stack";

import {
	createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import {GoogleSignin} from '@react-native-google-signin/google-signin';

import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';


import MyTasks from '../screens/MyTasks';
import Profile from '../screens/Profile';
import Login from '../screens/Login';

import Splash from '../screens/Splash';
import NewTask from '../screens/NewTask';
const LoggedInStack = createStackNavigator();
const AuthStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const AuthNavigator=()=>{
    return <Stack.Navigator
            initialRouteName="Login"
            >
                <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{
                            headerShown: false,
                        }}
                    />

            </Stack.Navigator>
}

const LoggedInNavigator=()=>{


    return ( 
        <Tab.Navigator
        initialRouteName="My Tasks"
        
        >
    
          <Tab.Screen 
          options={{
            tabBarIcon:({focused})=>(
              <FontAwesome5 name="tasks" size={focused?24:22} color={focused?"blue":"black"}/>
            ),
            // tabBarLabelPosition:"beside-icon"
          }}

          name="My Tasks" component={MyTasks} />


          <Tab.Screen
          name={"ADD"}
          component={NewTask}
          options={{
            tabBarIcon:({focused})=>(
                <FontAwesome5 name="plus" size={focused?24:22} color={focused?"blue":"black"}/>
              ),
            
              
          }}
          
          />


          <Tab.Screen 
           options={{
            tabBarIcon:({focused})=>(
              <FontAwesome5 name="house-user" size={focused?24:22} color={focused?"blue":"black"}/>
            ),
            // tabBarLabelPosition:"beside-icon"
          }}
    
          name="Profile" component={Profile} />
        </Tab.Navigator>)
}
const Navigation=()=>{


    // isLoggedIn();


   

    return (<NavigationContainer>

<Stack.Navigator initialRouteName={ "Splash"}>
				
                <Stack.Screen

                name="Splash"
                component={Splash}
                options={{
                    headerShown: false,
                }}

                />
                    <Stack.Screen
                        name="Home"
                        component={LoggedInNavigator}
                        options={{
                            headerShown: false,
                        }}
                    />
             
                 <Stack.Screen
                        name="Welcome"
                        component={AuthNavigator}
                        options={{
                            headerShown: false,
                        }}
                    />
                
			</Stack.Navigator>


        </NavigationContainer>);


}


export default Navigation;