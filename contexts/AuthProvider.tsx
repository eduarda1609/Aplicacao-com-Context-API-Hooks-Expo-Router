import { router } from "expo-router";
import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<string | null>(null);

  function login(name: string) {
  if (!name) return;

  setUser(name);

  router.replace("/(tabs)");
}

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading: false }}>
      {children}
    </AuthContext.Provider>
  );
}
