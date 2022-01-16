import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faToolbox, faFan, faKey, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import styles from './styles';
import Menu from '../Menu';

const CarItem = () => {
  const [locked, setLocked] = useState(false)
  const clickLock = () => {
    if (locked) {
      setLocked(false)
    } else {
      setLocked(true)
    }
  }

  return (
    <View style={styles.carContainer}>
      {/* <ImageBackground 
        source={require('../../assets/background.png')}
        style={styles.backgroundImage}
      /> */}
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon style={styles.icon} icon={ faCog } size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>MangoMobile</Text>
        <TouchableOpacity>
          <FontAwesomeIcon style={styles.icon}  icon={ faToolbox } size={24} />
        </TouchableOpacity>
      </View>
      {/* Milage */}
      <View style={styles.batterySection}>
        <Image style={styles.batteryImage} source={require('../../assets/battery.png')} />
        <Text style={styles.batteryText}>150 mi</Text>
      </View>
      {/* Status */}
      <View style={styles.status} >
        <Text style={styles.statusText}>Parked</Text>
      </View>
      {/* Car */}

      <View>
        <Image style={styles.carImage} source={require('../../assets/tesla-model-s.png')} />
      </View>

        {/* Control Icons  */}
      <ScrollView>

        <View style={styles.controls}>
          <TouchableOpacity style={styles.controlsButton}>
            <FontAwesomeIcon style={styles.icon} icon={ faFan } size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlsButton}>
            <FontAwesomeIcon style={styles.icon} icon={ faKey } size={24} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.controlsButton}
            onPress={clickLock}
          >
            <FontAwesomeIcon 
              style={styles.icon} 
              icon={locked ? faLock : faUnlock} size={24} 
            />
          </TouchableOpacity>
        </View>
        {/* Menu */}
        <Menu />
      </ScrollView>
    </View>
  )
}

export default CarItem;