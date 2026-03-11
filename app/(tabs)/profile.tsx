import { Button, Text, View } from "react-native";
import { useAuth } from "../../hooks/useAuth";

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <View style={{ padding: 20 }}>
      <Text>Usuário logado:</Text>
      <Text>{user}</Text>

      <Button title="Logout" onPress={logout} />
    </View>
  );
}
