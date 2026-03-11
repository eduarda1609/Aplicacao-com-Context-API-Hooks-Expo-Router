import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }: any) {

  const [user, setUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    const storedUser = await AsyncStorage.getItem("user");

    if (storedUser) {
      setUser(storedUser);
    }

    setIsLoading(false);
  }

  async function login(name: string) {
    setUser(name);
    await AsyncStorage.setItem("user", name);
  }

  async function logout() {
    setUser(null);
    await AsyncStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
