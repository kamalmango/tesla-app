import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      {/* Header */}
      <View style={styles.header}>
        <Text>Settings</Text>
        <Text>NazMobile</Text>
        <Text>Surprise</Text>
      </View>
    </View>
  )
}

export default CarItem;