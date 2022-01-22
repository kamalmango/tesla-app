import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faToolbox, faFan, faKey, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';

const Controls = ( {clickLock, locked} ) => (
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
)

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
        <Image style={styles.batteryImage} source={require('../assets/battery.png')} />
        <Text style={styles.batteryText}>150 mi</Text>
      </View>
      {/* Status */}
      <View style={styles.status} >
        <Text style={styles.statusText}>Parked</Text>
      </View>
      {/* Car */}

      <View>
        <Image style={styles.carImage} source={require('../assets/tesla-model-s.png')} />
      </View>

        {/* Control Icons  */}
      {/* <ScrollView> */}
  
        {/* Menu */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Controls clickLock={clickLock} locked={locked} />
        <Menu />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: '100%',
  },
  carImage: {
    height: 120,
    width: 250,
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 30
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 170
  },
  controlsButton: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    padding: 18,
    marginLeft: 25
  },
  header: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  headerTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    color: 'white'
  },
  batterySection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  batteryImage: {
    height: 26,
    width: 70,
    marginRight: 12
  },
  batteryText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  status: {
    alignItems: 'center'
  },
  statusText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
})

export default CarItem;