import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const { login } = useAuth();
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Digite seu nome</Text> 
      {"\n"}
     
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity style={styles.button} onPress={() => login(name)}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "center", // centraliza vertical
    alignItems: "center", // centraliza horizontal
    padding: 20
  },


  title: {
    fontSize: 28,
    fontWeight: "bold",
     marginBottom: 20,
   
    textAlign: "center"
  },

  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
    textAlign: "center"
  },

  input: {
  width: 300,
  backgroundColor: "#fff",
  padding: 15,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: "#ddd",
  marginBottom: 20
},


  button: {
  width: 300,
  backgroundColor: "#4CAF50",
  padding: 15,
  borderRadius: 10,
  alignItems: "center"
},


  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }

});
