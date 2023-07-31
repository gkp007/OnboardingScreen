import { StyleSheet, Text, View,TouchableOpacity, Animated } from 'react-native';
import { Svg, G, Circle } from 'react-native-svg';
import React, { useEffect, useRef } from 'react';
import  AntDesign from 'react-native-vector-icons/AntDesign'

const NextButton = ({percentage, scrollTo}) => {
    const size = 80;
    const strokeWidth =10;
    const center = size/2;
    const radius = size / 2 - strokeWidth /2;
    const circumference = 2 * Math.PI * radius;
    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef(null);
    const animation = (toValue) => {
        return Animated.timing(progressAnimation,{
            toValue,
            duration:900,
            useNativeDriver: true
        }).start();
    };
    useEffect(()=>{
        animation(percentage);
    },[percentage]);

    useEffect(()=>{
        progressAnimation.addListener((value)=>{
            const strokeDashoffset = circumference - (circumference * value.value)/100;

            if(progressRef?.current){
                progressRef.current.setNativeProps({
                    strokeDashoffset
                });
            }
        },
        [percentage]
        );
    });
  return (
    <View style= {styles.container}>
        <Svg width={size} height={size}>
        <G rotation={-90} origin={center}>

            <Circle 
                ref={progressRef  }
                stroke="blue" 
                cx={center} 
                cy={center} 
                r={radius} 
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                />
            </G>
        </Svg> 
        <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6}>
            <AntDesign name="right" size={40} color="white"/>
        </TouchableOpacity>
      
    </View>
  )
}

export default NextButton

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
      },
      button:{
        position:'absolute',
        backgroundColor:'#6495ed',
        borderRadius:50,
        padding:15,
      }
})