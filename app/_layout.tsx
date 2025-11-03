import { Stack } from 'expo-router';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { setupAudioPro } from './player-service';

setupAudioPro();

export default function RootLayout() {

  useEffect(() => {
    
  }, []);

  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: true, title: 'Home' }} />
      </Stack>
  );
}
