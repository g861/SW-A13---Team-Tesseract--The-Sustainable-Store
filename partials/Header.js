import { View,ScrollView, Text , Image , StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
      <Image 
            source={require('../assets/logo.png')}
            resizeMode="contain"
            style={{height:70 , marginTop:10 ,borderRadius:100, alignItems:'center'}} 
       />
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        width:"100%",
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        padding:20,
        backgroundColor:'white'
    }
})

export default Header