import React from 'react';

import {View ,Text, StyleSheet,Dimensions, Alert, ToastAndroid} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';
import Button from '../components/Button';
import { deleteTaskAction } from '../store/actions';

const {height,width} = Dimensions.get('window');

export default (props)=>{
const sheetRef=React.useRef();
const dispatch=useDispatch();
const {user}=useSelector(state=>state.entities.user.userInfo.profile);


    return <>
    <View style={styles.wrapper}>
<Text style={styles.header}>{props.title} </Text>
{/* <Text>Description : </Text> */}
<Text style={styles.description}>
   {props.description}
</Text>

<View style={{flexDirection:'row',justifyContent:'flex-end'}}>
    {/* <Button title="EDIT"  onPress={()=>sheetRef.current.open()}/> */}
    <Button title="REMOVE" 
    onPress={()=>{
        Alert.alert("Remove Task","Are you sure you want to remove this taks?",
        [{text:"YES",onPress:()=>{
            dispatch(deleteTaskAction(props.id,user.email,()=>{
                Toast.show("Task has beend deleted")
            }))
        }},
    {text:"CANCEL",onPress:()=>{},style:'cancel'}])
    }}/>
</View>
    </View>
    <RBSheet
    ref={sheetRef}
    height={300}
    openDuration={250}
    closeOnDragDown={true}
    >

    </RBSheet>
    </>
}

const styles=StyleSheet.create({
    header:{
        fontWeight:"600",
        fontSize:18
    
    },
    wrapper:{
        paddingHorizontal:20,
        paddingVertical:30,
        paddingTop:10,
        borderColor:'#eee',
        borderWidth:1,
        backgroundColor:'white',
        marginHorizontal:15,
        marginVertical:5,
        borderRadius:10,
    },
    description:{
        // borderWidth:1,
        borderColor:'#ccc',
        // backgroundColor :'#ccc',
        marginVertical:10,
        color:"gray",
        borderRadius:10,
        padding:10,
        // height:height/6
    }
})