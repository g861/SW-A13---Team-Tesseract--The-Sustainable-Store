import { View, Text ,Dimensions , StyleSheet , Button } from 'react-native'
import React from 'react'
import ElectronicBanner from '../../partials/ElectronicBanner'
import { ScrollView } from 'react-native-gesture-handler'
import { Icon } from 'react-native-vector-icons/FontAwesome'

var {width} = Dimensions.get('window') ; 

const EkartContainer = (props) => {
  const {item} = props

  return (
    
    <ScrollView>
          <ElectronicBanner />
      <View style={styles.quote}>
        <Text style={styles.quoteText}>There Is No Such {"\n"} Thing As Away , {"\n"}  When We Throw {"\n"} Anything Away It {"\n"} Must Go Somewhere </Text>
      
      <View style={styles.ElectronicRequest}>
        <Text style={styles.requestText}>
          Want To Avail Excessive Discounts On Your Products By Getting Rid Of Your E-WASTE 😍😍
        </Text>
      
        <Button 
          // style = {[{height:2 , marginTop:15 }],styles.addRequestCamera}
          onPress={()=> props.navigation.navigate("E-kart Request" , {item : item })}
          
          title={'Click Here'}
        >
          </Button>
      </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  quoteText:{
    fontSize:20,
    color:'grey',
    justifyContent:'center',
    textAlign:'center',
    alignItems:'center',
    marginTop:15,
    fontFamily:'CedarvilleCursive-Regular',
  },
  ElectronicRequest:{
    backgroundColor:'#b0e0e6',

    width:width,
    height:120,
    fontSize:25,
    marginTop:50,
    padding:10,
    justifyContent:'center',
 
  },
  requestText:{
    fontSize:15,
    fontWeight:'bold',
    justifyContent:'center',
    marginTop:18,
    color:'#36454f',
    marginLeft:40,
    fontFamily:'CedarvilleCursive-Regular',
    marginBottom:25,
  },
  addRequestCamera:{
    marginTop:25,
    width:100,
  }
})

export default EkartContainer