import React from 'react';
import { View,Text } from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin'
export default ({navigation})=>{
React.useEffect(async()=>{
        try{
        const isSignedIn=await GoogleSignin.isSignedIn();
        if(isSignedIn===true){
           navigation.navigate("Home")
        }
        else
        navigation.navigate("Welcome")
      }
      catch(err){
        console.log("ERROR");
        // navigation.navigate("Welcome")
      }

},[])


    return <>
    <View style={{flex:1,justifyContent:'center'}}>
        <Text style={{
            alignSelf:'center',
            fontSize:26,
            color:'black',
            fontWeight:'800'
        }}>Groww</Text>

    </View>

    </>
}