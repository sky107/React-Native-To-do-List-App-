
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';
import {postTask,patchTask,deleteTask} from '../../services';
import { BASE_URL } from '../../services/APICentral';

export const postTaskAction=(data,callback)=>{

    return dispatch=>{
        axios.post(BASE_URL+"/task",data)
        .then(res=>{
            console.log(res);
           if(callback)
           callback(true);
        })
        .catch(err=>{
            console.log(err);
        })
    }
}



export const deleteTaskAction=(data,email,callback)=>{

    return dispatch =>{
        console.log("UNDERU")
        axios.delete(BASE_URL+`/task/${data}`)
        .then(res=>{
            console.log(res.data);
            dispatch(fetchTasksAction(email));
            if(callback)
            callback(true);
        })
        .catch(err=>{console.warn(err)})
    }
}

export const fetchTasksAction=(data,callback)=>{
    return dispatch =>{
        axios.get(`${BASE_URL}/task/${data}`)
        .then(res=>{
            // console.log(res.data);
            dispatch({type:"SAVE_TASKS",payload:res.data.response})
        })

        .catch(err=>{
            // console.log(err);
        })
    }
}