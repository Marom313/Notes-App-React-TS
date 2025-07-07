import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '@views/SplashScreen';
import LoginScreen from '@views/login/LoginScreen';
import MainScreen from '@views/main/MainScreen';
import SignUpScreen from '@views/signup/SignUpScreen';
import { NoteRealm } from '@models/realm/note.realm';
import NoteEditScreen from '@views/note/NoteEditScreen';



const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Main: undefined;
  NoteEdit: { note?: NoteRealm };
  SignUp: undefined;
};

const AppRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="NoteEdit" component={NoteEditScreen} />
    </Stack.Navigator>
  );
};

export default AppRouter;
