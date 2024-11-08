import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import LoginScreen from '../components/LoginScreen';
import * as SecureStore from "expo-secure-store";

// Token cache with JSON encoding
const tokenCache = {
  async getToken(key) {
    try {
      const value = await SecureStore.getItemAsync(key);
      return value ? JSON.parse(value) : null;
    } catch (err) {
      console.error("Failed to retrieve token:", err);
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return await SecureStore.setItemAsync(key, JSON.stringify(value));
    } catch (e) {
      console.error("Failed to save token:", e);
      return null;
    }
  },
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Outfit-ExtraBold": require("../assets/fonts/Outfit-ExtraBold.ttf"),
    "Outfit-Medium": require("../assets/fonts/Outfit-Medium.ttf"),
    "Outfit-SemiBold": require("../assets/fonts/Outfit-SemiBold.ttf"),
    "Outfit-Regular": require("../assets/fonts/Outfit-Regular.ttf")
  });
  
  if (!fontsLoaded) {
    return null; // Add a loading screen here if desired
  }

  return (
    <ClerkProvider tokenCache={tokenCache}publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SignedIn>
      <SignedOut>
        <LoginScreen />
      </SignedOut>
    </ClerkProvider>
  );
}
