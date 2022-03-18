import { View, Text , Image , ScrollView , StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Swiper from 'react-native-swiper' ; 

var { width } = Dimensions.get("window") ; 

const Banner = () => {
    const [bannerData , setBannerData] = useState([]) ; 

    useEffect(() => {
        setBannerData([
            'https://images.all-free-download.com/images/graphiclarge/eco_banners_design_with_recycle_icons_and_earth_6825296.jpg',
            'https://c8.alamy.com/comp/2C0JHC1/colorful-recycle-bin-banner-illustration-for-recycling-activity-in-separate-eco-friendly-trash-cans-nature-help-campaign-or-waste-reduction-concept-2C0JHC1.jpg',
            'https://www.2daybanners.com/images/mastertemplates/660/183_99962702_1.jpg'
        ])
        return() => {
            setBannerData([]) ; 
        }
    } , [])

  return (
    <View style={styles.container}>
      <View style={styles.swiper}>
          <Swiper
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={2}
            style={{height : width/2}}
          >
              {bannerData.map((item) => {
                  return(
                      <Image 
                        key={item} 
                        resizeMode="contain"
                        source={{uri : item}}
                        style={styles.imageBanner}
                      />
                  )
              }) }
          </Swiper>
          <View style={{height:20}} ></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'gainsboro'
    },

    swiper:{
        width:width , 
        alignItems : 'center' , 
        marginTop: 10 , 
    }, 
    imageBanner:{
        height : width/2 , 
        width : width - 40 , 
        borderRadius : 10 , 
        marginHorizontal : 20
    }
})

export default Banner