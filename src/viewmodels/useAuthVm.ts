import { useState, useEffect } from 'react';
import {
  login,
  signup,
  logout,
  getCurrentUser,
  watchAuthState,
} from '../services/authService';
import { User } from 'firebase/auth';

export function useAuthVM() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(getCurrentUser());

  useEffect(() => {
    const unsub = watchAuthState(setCurrentUser);
    return () => unsub();
  }, []);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const user = await login(email, password);
      setCurrentUser(user);
      setErrorMessage(null);
    } catch (e: any) {
      setErrorMessage(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (confirmPassword: string) => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return null;
    }
    try {
      setIsLoading(true);
      const user = await signup(email, password);
      setCurrentUser(user);
      setErrorMessage(null);
    } catch (e: any) {
      setErrorMessage(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setCurrentUser(null);
  };

  return {
    email, setEmail,
    password, setPassword,
    firstName, setFirstName,
    lastName, setLastName,
    isLoading,
    errorMessage,
    currentUser,
    handleLogin,
    handleSignup,
    handleLogout,
  };
}
