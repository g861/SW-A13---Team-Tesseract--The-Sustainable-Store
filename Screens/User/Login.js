import { View, Text,StyleSheet,Button ,Dimensions } from 'react-native'
import React,{ useState , useContext, useEffect } from 'react'
import FormContainer from '../../partials/Form/FormContainer'
import Input from '../../partials/Form/Input'
import AuthGlobal from '../../Context/store/AuthGlobal'
import { loginUser } from '../../Context/actions/Auth.action'
import Auth from '../../Context/store/Auth'

var {width} = Dimensions.get("window")

const Login = (props) => {
    const context = useContext(AuthGlobal)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState("")

    useEffect(()=>{
        if(context.stateUser.isAuthenticated === true){
            props.navigation.navigate("User Profile")
        }
    },[context.stateUser.isAuthenticated]);

    const handleSubmit = () => {
        const user = {
            email,
            password
        }
        if(email==="" || password===""){
            setError("Please fill in your credentials")
        }else{
            console.log("The Login button Is Pressed")
            console.log(user)
            try{
                loginUser(user , context.dispatch)
                console.log("Login User ",user)
            }
            catch{
                console.log("There is an error in dispatching")
            }
        }
    }   

  return (
    <FormContainer title={"Login"}>
        <Input 
            placeholder={"Enter Email"}
            name={"email"}
            id={"email"}
            value={email}
            onChangeText={(text) => setEmail(text)}
        />
        <Input 
            placeholder={"Enter Password"}
            name={"password"}
            id={"password"}
            secureTextEntry={true}
            value={password}
            onChangeText={(inp) => setPassword(inp)}
        />

        <View style={styles.buttonGroup}>
            <Button title="Login" style={styles.loginButton} onPress={handleSubmit} />

        </View>
        <View style={[{marginTop:40 , width:200} , styles.buttonGroup]}>
        <Text style={styles.middleText}>Don't have an account yet?</Text>
                <Button title='Register' onPress={() => props.navigation.navigate("Register")} />
        </View>
    </FormContainer>
  )
}
const styles = StyleSheet.create({
    buttonGroup:{
        
        alignItems:'center'
    },
    middleText:{
        marginBottom:20,
        alignSelf:'center'
    },
    loginButton:{
        width:width/2
    }
})
export default Login