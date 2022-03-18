
import React,{useContext ,useState , useCallback, useEffect} from 'react'
import { View , Text , ScrollView } from 'react-native' ; 
import {Container} from "native-base" ;
import AsyncStorage from '@react-native-async-storage/async-storage' ; 
import axios from 'axios';
import baseUrl from '../../assets/common/baseUrl';
import AuthGlobal from '../../Context/store/AuthGlobal';
import { logoutUser } from '../../Context/actions/Auth.action';

const UserProfile = (props) => {

  const context = useContext(AuthGlobal) ; 
  const [userProfile,setUserProfile] = useState() 
  
  useEffect(()=>{ 
    if(context.stateUser.isAuthenticated===false || context.stateUser.isAuthenticated===null){
      props.navigation.navigate("Login") ; 
    } 
    
  AsyncStorage.getItem("jwt")
              .then((res) => {
                axios.get(`${baseUrl}users/${context.stateUser.user.sub}`,{
                  headers: { Authorization: `Bearer ${res}` },
                },
                console.log("This is the res",res)
                )
              })
              .then((user) =>{ 
                console.log("This is the user",user)
                setUserProfile(user)})
              .catch((err)=>{
                console.log("This is state user",context.stateUser)
                console.log("There is an error",err)
              })
    return()=>{
      setUserProfile()
    }
  } , [context.stateUser.isAuthenticated])

  return (
    <View>
      <Text style={{fontSize:30}}>
        {userProfile?userProfile.email:"No Names Found"}
      </Text>
    </View>
  )
}

export default UserProfile