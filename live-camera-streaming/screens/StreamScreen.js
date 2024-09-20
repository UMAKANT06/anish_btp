import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

const StreamScreen = ({ route }) => {
  const { cameraRef } = route.params;

  return (
    <View style={styles.container}>
      {/* Display the same camera feed on this screen */}
      {cameraRef && (
        <Camera
          style={styles.camera}
          type={Camera.Constants.Type.back}
          ref={cameraRef} // Use the same camera reference
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
});

export default StreamScreen;
