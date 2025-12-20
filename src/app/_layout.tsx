import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { PaperProvider } from 'react-native-paper'
import "../global.css"
import { AuthProvider } from '../context/auth';

export default function RootLayout() {
  return (
    <AuthProvider>
      <PaperProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="Home" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </PaperProvider>
    </AuthProvider>
  );
}
