import { StyleSheet, Text, View,Image,useWindowDimensions } from 'react-native'
import React from 'react'

const OnboardingItem = ({item}) => {

    const {width} =useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Image source={item.image} style={[styles.image, {width, resizeMode:'contain'}]}/>
      <View style={{flex:0.3}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  )
}

export default OnboardingItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f0ffff',
        alignItems:'center',
        justifyContent:'center',
      },
      image:{
        flex:0.7,
        justifyContent:'center',
      },
      title:{
          fontWeight:'800',
          fontSize:28,
          marginBottom:10,
          color:'black',
          textAlign:'center',
      },
      subtitle:{
        fontWeight:'300',
        color:'black',
        textAlign:'center',
        paddingHorizontal:64,
      }
})