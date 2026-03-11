import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {

  const { login } = useAuth();
  const [name, setName] = useState("");

  function handleLogin() {
    if (!name) return;

    login(name);
    router.replace("/");
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Digite seu nome
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        value={name}
        onChangeText={setName}
      />

      <Button
        title="Entrar"
        onPress={handleLogin}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    marginBottom: 20,
  },

  input: {
    width: 250,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
  },

});
