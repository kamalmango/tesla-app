import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CarItem from './components/CarItem';
import { LinearGradient } from 'expo-linear-gradient';

//#525252
//#000000


export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#525252', '#000000']}
        // colors={['#000000', '#525252']}
        locations={[0.1, 0.6]}
        style={styles.background}
      />
      <CarItem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  }
});
