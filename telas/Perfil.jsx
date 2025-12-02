import { View, Text } from "react-native";
import { useState } from "react";

export default function Perfil() {
  const [nome, setNome] = useState("Vinicius");
  const [email, setEmail] = useState("");

  return (
    <View>
      <Text>Nome: {nome}</Text>
      <Text>Email: {email}</Text>
    </View>
  );
}

