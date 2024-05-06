import * as React from 'react';
import StackNavigate from './app/navigation/Stack';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import UserProvider from './app/Components/hooks/user';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#231f20',
    secondary: '#31294f',
  },
};


export default function App() {
  return (
    <UserProvider>
      <PaperProvider theme={theme}>
        <StackNavigate />
      </PaperProvider>
    </UserProvider>
  );
}