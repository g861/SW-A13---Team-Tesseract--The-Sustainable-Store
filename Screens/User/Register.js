import { View, Text,StyleSheet ,ScrollView , Dimensions } from 'react-native'
import React, {useState} from 'react'
import FormContainer from '../../partials/Form/FormContainer';
import Input from '../../partials/Form/Input';
import { Button,Container, Right } from 'native-base';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-toast-message";
import baseUrl from '../../assets/common/baseUrl';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign'

var {width} = Dimensions.get("window")

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const register = () => {
        let user = {
          name: name,
          email: email,
          password: password,
          phone: phone,
          isAdmin: false,
        };
        axios
          .post(`${baseUrl}users`, user)
          .then((res) => {
            if (res.status == 200) {
              console.log(res);
              Toast.show({
                topOffset: 60,
                type: "success",
                text1: "Registration Succeeded",
                text2: "Please Login into your account",
              });
              setTimeout(() => {
                props.navigation.navigate("Login");
              }, 500);
            }
          })
          .catch((error) => {
            console.log("Sorry there is an error",error) ; 
            console.log("The data of the user is", " ",user)  
            Toast.show({
              topOffset: 60,
              type: "error",
              text1: "Something went wrong",
              text2: "Please try again",
            });
          });
      };
  return (
    <Container style={styles.container}>

  
    <ScrollView>

  
    <FormContainer title={"Register"}>
    <Input
      placeholder={"Email"}
      name={"email"}
      id={"email"}
      onChangeText={(text) => setEmail(text.toLowerCase())}
    />
    <Input
      placeholder={"Name"}
      name={"name"}
      id={"name"}
      onChangeText={(text) => setName(text)}
    />
    <Input
      placeholder={"Phone Number"}
      name={"phone"}
      id={"phone"}
      keyboardType={"numeric"}
      onChangeText={(text) => setPhone(text)}
    />
    <Input
      placeholder={"Password"}
      name={"password"}
      id={"password"}
      secureTextEntry={true}
      onChangeText={(text) => setPassword(text)}
    />
    <View style={styles.buttonGroup}>
    </View>
    <View>
      <Button style={[{marginBottom:10 , width:100, color:'#40E0D0'}, styles.registerButton ]} onPress={() => register()} >
        <Text style={[{marginLeft:25, color: "white" , justifyContent:'center' }, styles.registterText]}>Register</Text>
      </Button>
    </View>
    <View>
      <Button
        large
        style={{color:'white', width:150}}
        secondary
        onPress={() => props.navigation.navigate("Login")}
      >
        <Text style={{marginLeft:35 , color: "white" }}>Back to Login</Text>
      </Button>
    </View>
  </FormContainer>
  </ScrollView>
  </Container>
  )
}

const styles = StyleSheet.create({
    buttonGroup: {
        width: "80%",
        margin: 10,
        alignItems: "center",
    },
    registerButton:{
      backgroundColor:'#215E21',
      borderRadius:20,
      width:width/2 - 10,
      height:60,
    },
    registterText:{
      fontSize:20,
      marginLeft:60
    },
    container:{
      backgroundColor:'#E6E6E6'
    }
})
export default Register