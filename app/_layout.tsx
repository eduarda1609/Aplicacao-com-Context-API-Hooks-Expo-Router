import { Stack } from "expo-router";
import { AuthProvider } from "../contexts/AuthProvider";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login/index" />
        <Stack.Screen name="index" />
        <Stack.Screen name="profile" />
      </Stack>
    </AuthProvider>
  );
}
