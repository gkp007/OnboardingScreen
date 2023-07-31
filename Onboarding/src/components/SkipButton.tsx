import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';

const SkipButton = ({ onPress, hide }) => {
  const opacityAnimation = useRef(new Animated.Value(hide ? 0 : 1)).current;

  useEffect(() => {
    Animated.timing(opacityAnimation, {
      toValue: hide ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [hide]);

  if (hide) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, { opacity: opacityAnimation }]}>
      <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.6}>
        <Text style={styles.text}>Skip</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default SkipButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
