import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRouter from './src/app/router';
import { RealmProvider } from '@services/RealmProvider';


export default function App() {
  return (
    <RealmProvider>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </RealmProvider>
  );
}
