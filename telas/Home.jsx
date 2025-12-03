import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native';

export default function Home({ navigation }) {
  const [imageUri, setImageUri] = useState(null);
  const [status, setStatus] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  async function abrirCamera() {
    try {
      setStatus("Pedindo permissão...");

      const { status } = await ImagePicker.requestCameraPermissionsAsync();

      if (status !== 'granted') {
        setStatus("Permissão negada! Não pode usar a câmera!");
        Alert.alert('Permissão negada', 'Permissão negada para acessar a câmera!');
        return;
      }

      setStatus("Abrindo a câmera...");

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1
      });

      if (result.canceled) {
        setStatus("Cancelado com sucesso!");
      } else {
        const foto = result.assets[0];
        setImageUri(foto.uri);
        setStatus("Imagem capturada");
      }

    } catch (error) {
      setStatus("Erro ao abrir a câmera");
    }
  }

  function irParaPerfil() {
    
    if (!nome || !email) {
      Alert.alert('Atenção', 'Por favor, preencha nome e email!');
      return;
    }

    
    navigation.navigate('Perfil', {
      nome: nome,
      email: email,
      foto: imageUri
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem vindo ao meu site de Stories</Text>
      <Text style={styles.subtitulo}>Faça as suas publicações como achar melhor!</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder='Escreva seu nome'
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder='Escreva seu email'
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.btn} onPress={abrirCamera}>
        <Text style={styles.txtbtn}>Escolher imagem</Text>
      </TouchableOpacity>

      <Text style={styles.status}>{status}</Text>

      {imageUri ? (
        <Image source={{ uri: imageUri }} resizeMode='cover' style={styles.imagem} />
      ) : (
        <Text style={styles.semFoto}>Nenhuma foto capturada</Text>
      )}

      <TouchableOpacity style={styles.btn} onPress={irParaPerfil}>
        <Text style={styles.txtbtn}>Ver perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imagem: {
    width: 300,
    height: 300,
    marginVertical: 20,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '90%',
    alignItems: 'center',
  },
  txtbtn: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    marginTop: 10,
    color: '#666',
    fontStyle: 'italic',
  },
  semFoto: {
    marginVertical: 20,
    color: '#999',
  },
});