import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Link } from 'react-router-dom';



export default function App() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');

  async function abrirCamera(){
    try{
        setStatus("pedindo permissão....")

        const {status}= await ImagePicker.requestCameraPermissionsAsync();

        if(status !== 'granted'){
          setStatus("Permissão negada!! não pode usar a câmera!!!");
          return;
        }

        setStatus("Abrindo a câmera ...");


        const result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality:1
        })

        if(result.canceled){
          setStatus("Cancelado com sucesso!!!")
        }else{
          const foto = result.assets[0];
          setImageUri(foto.uri);
          setStatus("Imagem capturada");
        }

    }catch(error){
        setStatus("erro ao abrir")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem vindo ao meu site de Stores</Text>
      <Text style={styles.subtitulo}>Faça as suas publicações como achar melhor!!!</Text>

      <Text>Nome:</Text>
      <TextInput 
      placeholder='Escreva aqui'
      />

      <Text>Email:</Text>
      <TextInput 
      placeholder='Escreva aqui'
      />


      <TouchableOpacity style={styles.btn} onPress={abrirCamera}>
        <Text style={styles.txtbtn}>Escolher imagem</Text>
      </TouchableOpacity>

      <Text> {status}</Text>

      {
        imageUri ?(
          <Image source={{uri:imageUri}} resizeMode='cover' style={styles.imagem}/>
        ):

        (
          <Text>Nenhuma foto capturada</Text>
        )
      }

      <TouchableOpacity style={styles.btn} 
     

      
      >
        
        <Text style={styles.txtbtn}>Ver perfil</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  imagem:{
    width:300,
    height: 300

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: '#666',
  },
  btn: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    color: '#fff',
  },
  txtbtn: {
    color: '#fff',
    fontSize: 16,
  },
});
