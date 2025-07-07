import { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Main'); // or 'Login'
    }, 1000);
  }, []);

  return (
     <View style={styles.container}>
      <Text style={styles.title}>🔥 REAL SPLASH SCREEN 🔥</Text>
    </View>
    // <View style={styles.container}>
    //   <Image
    //     source={require('../../assets/icon.png')} // ✅ or use a different image
    //     style={styles.logo}
    //   />
    //   <Text style={styles.text}>NotesApp1234</Text>
    // </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
  },
});
