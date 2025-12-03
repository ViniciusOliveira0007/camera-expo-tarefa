import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Perfil({ navigation }) {
  const route = useRoute();
  const { nome, email, foto } = route.params;

  return (
    <View style={styles.container}>

      
      <Text style={styles.titulo}>Meu Perfil</Text>

      {foto ? (

        <Image source={{ uri: foto }} resizeMode='cover' style={styles.foto} />
      ) : (

        <View style={styles.semFoto}>
          <Text style={styles.semFotoTexto}>Sem foto</Text>
        </View>
      )}

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.valor}>{nome}</Text>



        <Text style={styles.label}>Email:</Text>
        <Text style={styles.valor}>{email}</Text>
      </View>



      <TouchableOpacity 
        style={styles.btnVoltar} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.txtBtn}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 30,
    borderWidth: 3,
    borderColor: '#007BFF',
  },
  semFoto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 3,
    borderColor: '#ddd',
  },
  semFotoTexto: {
    color: '#999',
    fontSize: 16,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    fontWeight: '600',
  },
  valor: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  btnVoltar: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  txtBtn: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});