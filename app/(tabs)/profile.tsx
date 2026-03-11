import { useAuth } from "@/hooks/useAuth";
import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";


export default function Profile() {

  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
    router.replace("/login");
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Perfil do Usuário
      </Text>

    

      <Text style={styles.name}>
        {user}
      </Text>

      <Button
        title="Logout"
        onPress={handleLogout}
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
    fontSize: 24,
    marginBottom: 20,
  },

  text: {
    fontSize: 18,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },

});
