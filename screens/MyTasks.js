import React from 'react';
import {Text,View,FlatList} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {fetchTasksAction} from '../store/actions';
import RBSheet from 'react-native-raw-bottom-sheet';
import TaskCard from '../components/TaskCard';

export default ()=>{

    const {user}=useSelector(state=>state.entities.user.userInfo.profile);



    const dispatch=useDispatch();
    const {all_tasks}=useSelector(state=>state.entities.user.userInfo);

    React.useEffect(()=>{
        if(user.email)
        dispatch(fetchTasksAction(user.email))
    },[])


    return <>


    <FlatList
    data={all_tasks?.reverse()}
    showsVerticalScrollIndicator={false}
    keyExtractor={e=>e?.id?.toString()}
    ListEmptyComponent={e=>{
        return <View style={{flex:1,justifyContent:'center',marginTop:'80%',marginLeft:'45%'}}>
    
            <Text>No Tasks</Text>
        </View>
    }}
    renderItem={({item})=>{

        return <TaskCard {...item} />
    }}

/>
    {/* {[1,2,3].map(e=><TaskCard key={e}/>)} */}



    </>
}