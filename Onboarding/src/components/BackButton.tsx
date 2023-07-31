// BackButton.tsx
import React, { useRef, useEffect } from 'react';
import { Text } from 'react-native'
import { StyleSheet, TouchableOpacity, Animated } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BackButton = ({ show, onPress }) => {
  const size = 40;
  const opacityAnimation = useRef(new Animated.Value(show ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(opacityAnimation, {
      toValue: show ? 1 : 0,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [show]);

  return (
    <Animated.View style={[styles.container, { opacity: opacityAnimation }]}>
      {show && (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.6}>
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 35,
    left: 10,
    backgroundColor: 'blue',
    borderRadius: 50,
    padding: 0,
  },
  button:{
    backgroundColor: 'blue',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,

  },
  text:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,

  }
});
