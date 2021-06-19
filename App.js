import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

import api from './src/services/api';

export default function App() {
  const [cep, setCep] = useState('');

  const inputRef = useRef(null);

  function clear() {
    setCep('');
    
    inputRef.current.focus();
  };
  
  return(
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.text}>Digite o cep desejado</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 79003241"
          value={cep}
          onChangeText={ (text) => setCep(text) }
          keyboardType="numeric"
          ref={ inputRef }
        />
      </View>
      <View style={styles.areaButton}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#1d75cd' }]}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#cd3e1d' } ]}
          onPress={ clear }
        >
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.result}>
        <Text style={styles.itemText}>CEP: 7900000</Text>
        <Text style={styles.itemText}>Logradouro: Rua dos Devs</Text>
        <Text style={styles.itemText}>Bairro: Centro</Text>
        <Text style={styles.itemText}>Cidade: São Paulo</Text>
        <Text style={styles.itemText}>Estado: SP</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  text:{
    marginTop: 25,
    marginBottom: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
  input:{
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18,
  },
  areaButton:{
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around',
  },
  button:{
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  buttonText:{
    fontSize: 15,
    color: '#fff',
  },
  result:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText:{
    fontSize: 22,
  },
});