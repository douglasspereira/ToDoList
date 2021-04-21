import CheckBox from '@react-native-community/checkbox';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'
import React, { useEffect, useState } from 'react';
import api from '../services/axios';
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const toDoList = ({navigation}) => {

  const [tarefas, setTarefa] = React.useState(false);


  useEffect(async () => {
    try{
      const response = await api.get('/todo');
      console.log(JSON.stringify(response));
      setTarefa(response.data);
    } catch (error) {
      console.log("DEU RUIM" + error);
    }
  }, [])

  const TextTarefa = ({item}) => {
    return(
      <View>
        <TouchableOpacity onPress={()=> navigation.navigate('Update')}>
          <Text style={styles.tarefaTitulo}>{item.titulo} - {item.descricao}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.tituloPg}>
            Minhas Tarefas
          </Text>

          <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Add')}>
              <Text style={styles.navegarPlus}>
                +
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.nomeLista}>Lista de Tarefas</Text>
          
          <FlatList
            style={{color: '#000'}}
            data={tarefas}
            renderItem={TextTarefa}
            keyExtractor={ tarefa => tarefa.titulo}
          >
          </FlatList> 
        </View>
      </View>
   
  );
}
    // <View>
    //   <ScrollView style={styles.tarefas}>
    //     <FlatList
    //       data={[1, 2, 3]}
    //       renderItem={() => {
    //         return (
    //           <View style={styles.blocoTarefa}>
    //             <View style={styles.blocoEsquerda}>
    //               <Text style={styles.titulo}>
    //                 Estender Roupa
    //               </Text>

    //               <Text style={styles.descricao}>
    //                 Esta tarefa é apenas um teste de layout
    //                 Esta tarefa é apenas um teste de layout
    //                 Esta tarefa é apenas um teste de layout
    //               </Text>
    //             </View>

    //             <View style={styles.blocoDireita}>
    //               <View style={styles.blocoData}>
    //                   <Text style={styles.data}>
    //                     07{"\n"}
    //                     ABRIL{"\n"}
    //                     2020
    //                   </Text>
    //               </View>

    //               <CheckBox
    //                 boxType="square"
    //                 value={checked}
    //                 onChange={() => setChecked(!checked)}
    //                 style={styles.checkBox}
    //               />
    //             </View>
    //           </View>
    //         )
    //       }}
    //     />
    //   </ScrollView>
    // </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },

  form: {

  },

  header: {
    height: 60,
    paddingTop: 12,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
    backgroundColor: '#EFCA08',
    flexDirection: "row",
    justifyContent: 'space-between',
  },

  tituloPg: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },

  navegarPlus: {
    fontSize: 35,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: -7,
  },

  blocoTarefa: {
    flex: 1,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#cecece',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  blocoEsquerda: {
    width: 340,
    padding: 10,
  },

  titulo: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: 5,
  },

  blocoDireita: {
    backgroundColor: '#00A6A6',
    width: 60,
  },  
  blocoData: {
    padding: 5,

  },
  data: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    borderColor: 'blue',
    borderWidth: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',

  },
  header: {
    fontSize: 42,
    marginBottom: 15
  },
  input:{
    width: 200,
    height: 40,
    marginVertical: 10,
    borderColor:'black',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20
  },
  button: {
    borderColor: '#ffd700',
    borderWidth: 1,
    borderRadius: 1,
    backgroundColor: '#ffd700',
    width: 100,
    height: 25,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText:{
    color:"#000"
  },
  tarefaTitulo: {
    borderColor: '#9e9e9e',
    borderTopWidth: 1,
    paddingVertical: 20,
    width: 200,
    textAlign: 'center'
  },
  nomeLista:{
    fontSize: 24,
    marginTop: 30,
    marginBottom: 20
  }
})
export default toDoList;