/*
Author : Siddharth Kumar Yadav
26/08/2021
*/
import React from "react";
import {View , Text ,Pressable, Platform} from 'react-native';

import {useDispatch} from 'react-redux';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export default ({navigation})=>{

    const dispatch=useDispatch();
React.useEffect(async()=>{
  try{
  const isSignedIn=await GoogleSignin.isSignedIn();
  if(isSignedIn){
    navigation.replace("Home");
  }
}
catch(err){
  console.log(err);
}
},[]);
    
  const [signOutVis,setSignOutVis]=React.useState(false);

  GoogleSignin.configure({
    webClientId:'660329728583-0dp6sncmm604iuj0t9fkrfnq2ote6oko.apps.googleusercontent.com',
    offlineAccess:true,
    iosClientId:'660329728583-mb8gjmkn15mlrs0uncm3evhtdrjbnjbi.apps.googleusercontent.com'
  })


  const handleClick=async()=>{
    try {
     
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      dispatch({type:"SAVE_PROFILE",payload:userInfo});
      if(Platform.OS==='android')
      console.log("LOGGED IN FROM ANDROID");
      else
      console.log("LOGGEDIN FROM IOS");
      console.log(userInfo);
      navigation.navigate('Home')

      setSignOutVis(true);
    } catch (error) {
     console.log(error);
    }
  }
 
  
  


  return (<>
<View style={{flex:1,justifyContent:'center',marginLeft:'25%'}}>
<Text style={{
       marginTop:10,
      
     }}>MADE BY SIDDHARTH {"\n"}GROWW ASSIGNEMENT </Text>
<GoogleSigninButton
    style={{ width: 192, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={()=>handleClick()}
     />
    
     </View>
  
  </>)
}


/*

Steps

FOR IOS
yarn add @react-native-community/google-signin
INSIDEPODFILE PASTE THIS BELOW IOSPLATORM = >pod ‘GoogleSignIn’
RUN => pod install
OPEN XCODE => UNDER TARGET => INFO TAB => URL => ADD REVERSE IOS CLIENT ID
TO GET THE REVERSE IOS CIENCE ID ADD FROM GOOGLE CONSOLE OR DIRECTLY PASTE F 

FOR ANDROID
CREATE A NEW ANDROID ID FROM CONSOLE TO DO THIS YOU WILL NEED TO CHANGE THE PACKAGE NAME
OF YOUR PROJECT , IF YOU CAN CONSIDER TWO SEPARATE CODEBASE THEN GO FOR IT
https://stackoverflow.com/questions/37389905/change-package-name-for-android-in-react-native

INSIDE STRING.XML INSIDE ANDROID FOLDER  PASTE SERVER CLIENT ID 
<resources>
    <string name="app_name">SML</string>
    <string name="server_client_id">660329728583-g7pc286d3s71b0d3uvasi1gbqegejq4u.apps.googleusercontent.comcls</string>
</resources>

*/

