import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuthVM } from '@viewmodels/useAuthVm';
import { RootStackParamList } from 'navigation/RootStackParamList';


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen = () => {
  const { currentUser } = useAuthVM();
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: currentUser ? 'Main' : 'Login' }],
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [currentUser]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#6200EE" />
      <Text>
      {currentUser ? 'To Main' : 'To Login'}
    </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
