import React,{useState} from 'react';
import Toast from 'react-native-simple-toast'
import { Text ,TextInput,View,StyleSheet, Keyboard} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import Button from '../components/Button';
import Navigation from '../navigation';
import { fetchTasksAction, postTaskAction } from '../store/actions/task';
export default ({navigation})=>{

    const [title,setTitle]=useState('');
    const [desc,setDesc]=useState('');

    const {user}=useSelector(state=>state.entities.user.userInfo.profile);
    const dispatch=useDispatch();

    const handleAddTask=()=>{
        Keyboard.dismiss()
       dispatch(postTaskAction({
           email:user.email,
           title:title,
           desc:desc
       },()=>{

        dispatch(fetchTasksAction(user.email))

           Toast.show("Successfully Added")
            setTimeout(()=>{

                navigation.navigate("My Tasks")
            },500)
       }));
    }

    return <View style={{paddingHorizontal:20,marginTop:10,flex:1,backgroundColor:'white'}}>
    <View>
       <Text style={{marginTop:20}}>
           Enter Task Title
       </Text>
       <TextInput 
       value={title}
       onChangeText={e=>setTitle(e)}
       style={styles.input}/>
    </View>

    <View>
       <Text style={{marginTop:20}}>
           Enter Task Description
       </Text>
       <TextInput 
       value={desc}
       onChangeText={e=>setDesc(e)}
       multiline={true}
       style={[styles.input,{height:200}]}/>
    </View>

    <View style={{marginLeft:'35%',margin:10}}>
        <Button 
        title="SAVE"
        type="primary"
        onPress={()=>handleAddTask()}
        />
    </View>



    </View>

}

const styles=StyleSheet.create({
    input:{
        borderWidth:1,
        // margin:10,
        borderColor:'#ccc',
        // backgroundColor:'#eee',
       borderRadius:8,
        paddingHorizontal:10,
        paddingVertical:5
    }
})