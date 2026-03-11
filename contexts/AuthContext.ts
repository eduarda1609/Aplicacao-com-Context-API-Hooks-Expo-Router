import { createContext } from "react";

export type User = {
  name: string;
};

export type AuthContextType = {
  user: User | null;
  login: (name: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);