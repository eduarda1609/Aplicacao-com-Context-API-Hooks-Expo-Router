import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../hooks/useAuth";


export default function Home() {

  const { user } = useAuth();

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Bem-vindo {user}
      </Text>

      <Button
        title="Ir para Perfil"
        onPress={() => router.push("/profile")}
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

});
