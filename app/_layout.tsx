import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useLayoutEffect, useState } from "react";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { useColorScheme } from "@/components/useColorScheme";
import { Slot, Stack } from "expo-router";
import { config } from "../config/gluestack-ui.config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "gluestack",
// };

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  const [styleLoaded, setStyleLoaded] = useState(false);
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // useLayoutEffect(() => {
  //   setStyleLoaded(true);
  // }, [styleLoaded]);

  // if (!loaded || !styleLoaded) {
  //   return null;
  // }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  return (
    <GluestackUIProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack
            screenOptions={{
              fullScreenGestureEnabled: true,
              gestureEnabled: true,
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="index"
              options={{ headerShown: false, gestureEnabled: true }}
            />
            <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false, gestureEnabled: true }}
            />
            <Stack.Screen
              name="Search"
              options={{ headerShown: false, gestureEnabled: true }}
            />
          </Stack>
        </ThemeProvider>
      </QueryClientProvider>
    </GluestackUIProvider>
  );
}
