import React from 'react';
import {Alert,Text,View,Image,FlatList,StyleSheet} from 'react-native';
import Button from '../components/Button';
import { useDispatch ,useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
const SIZE=20;
export default ({navigation})=>{
    const {user}=useSelector(state=>state.entities.user.userInfo.profile);


    const signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          console.log("SIGNOUT")
          navigation.replace("Welcome")
        //   setSignOutVis(false);
          // setUser({}); // Remember to remove the user from your app's state as well
        } catch (error) {
          console.error(error);
        }
      };
    

    return <>


    {/* <View style={styles.photoWrapper}> */}
    {/* <Text>Hello</Text> */}
    <Image
    style={styles.photoWrapper}
    source={{uri:user.photo}}
    />
    {/* </View> */}

    <View style={styles.description}>
    <Text style={{fontSize:20,fontWeight:'800'}}>
    <Ionicons name="person-circle-outline" size={SIZE} />
        &nbsp;&nbsp;{user.name} </Text>
    <Text style={{fontSize:18}}>
<Ionicons name="mail-outline" size={SIZE} />
        &nbsp;&nbsp;{user.email}</Text>

    
    </View>
    <View style={{paddingLeft:'35%'}}>
    <Button 
    title="LOG OUT"
    onPress={()=>
       { Alert.alert("Confirmation","Are you sure",
       [
           {text:"YES",onPress:()=>signOut()},
           {text:"NO",onPress:()=>{},style:'cancel'}
       ])
        //    signOut();
        
        }
    }
    />
    </View>

    </>
}

const styles=StyleSheet.create({
    photoWrapper:{
        borderRadius:100,
        height:200,
        width:200,
        backgroundColor:'white',
        // borderStyle:'dashed',
        borderWidth:2,
        alignSelf:'center',
        marginTop:30
    },
    description:{
        backgroundColor:'#eee',
        paddingHorizontal:50,
        paddingVertical:25,
        backgroundColor:'white',
        marginHorizontal:20,
        marginVertical:20
    }
})