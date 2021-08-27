import React from 'react';
import {View,Text, StyleSheet,Pressable} from 'react-native';



export default (props)=>{



    return <>
    <Pressable onPress={props.onPress}>
    <Text style={[props.type==='primary'?styles.primaryButton:styles.secondaryButton,props.style]}>
        {props.title}
    </Text>
    </Pressable>
    </>
}

const styles=StyleSheet.create({
    primaryButton:{
        padding:10,
        backgroundColor:'dodgerblue',
        color:'white',
        paddingHorizontal:25,
        paddingVertical:10,
        borderWidth:0.8,
        borderColor:'blue',
        fontSize:16,
        alignSelf:'flex-start'
        // marginHorizontal:10
        // borderRadius:10
    },
    secondaryButton:{
        padding:10,
        backgroundColor:'white',
        color:'dodgerblue',
        paddingHorizontal:25,
        paddingVertical:10,
        borderColor:'dodgerblue',
        // borderWidth:0.8,
        fontSize:16,
        alignSelf:'flex-start'
        // marginHorizontal:10
    }
})