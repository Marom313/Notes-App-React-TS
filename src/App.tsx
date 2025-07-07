import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RealmProvider } from '@services/RealmProvider';
import AppRouter from 'app/router';


export default function App() {
  return (
    <RealmProvider>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </RealmProvider>
  );
}
