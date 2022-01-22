import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMusic, faChevronRight, faFan, faKey, faLock, faUnlock  } from '@fortawesome/free-solid-svg-icons';
import items from './items'

const MenuItem = ({ item }) => (
  <TouchableOpacity style={styles.menuRow} key={item.id} >
    <FontAwesomeIcon style={styles.icon} icon={item.icon} size={24} />
    <View style={styles.menuTextBox}>
      <Text style={styles.menuText}>{item.title}</Text>
      {item.subTitle && (
        <Text style={styles.subTitle}>{item.subTitle}</Text>
      )}
    </View>
    <FontAwesomeIcon style={styles.arrowIcon} icon={ faChevronRight } size={24} />
  </TouchableOpacity>
)

const Menu = () => {
  return (
    <View styles={styles.menuItems}>
      {items.map(item => (
        <MenuItem item={item} key={item.id} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  menuItems: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  icon: {
    color: 'white',
    marginLeft: 20
  },
  menuText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
    textTransform: 'uppercase'
  },
  menuRow: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuTextBox: {
    flexGrow: 1
  },
  arrowIcon: {
    color: '#4D4D4E',
    marginRight: 10
  },
  subTitle: {
    color: 'grey',
    fontSize: 14,
    marginLeft: 15
  },
})

export default Menu;
