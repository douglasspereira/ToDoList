import React, {useState} from 'react';
import api from '../services/axios';
import DatePicker from 'react-native-date-picker'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const UpdateTarefa = ({navigation}) => {

  const [tituloTarefa, setTituloTarefa] = useState("");
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [dateTarefa, setdateTarefa] = useState(new Date());

  const UpdateTarefa = async () => {
  
    if (tituloTarefa && descricaoTarefa){
      try{
        const response = await api.put('/todos/:id', {"titulo": tituloTarefa, "descricao": descricaoTarefa, "date":dateTarefa});
        console.log(JSON.stringify(response.data));
        navigation.navigate('Tarefas');
      } catch (error) {
        console.log("DEU RUIM" + error);
      }
    }
  }
      return(
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Atualizar Tarefas</Text>
      </View>

      <View>
        <TextInput placeholder="Título" style={styles.input} value={tituloTarefa} onChangeText={item => {setTituloTarefa(item)}} />
        <View style={styles.textAreaContainer} >
          <TextInput
            style={styles.textArea}
            value={descricaoTarefa}
            underlineColorAndroid="transparent"
            placeholder="Descrição"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
            onChangeText={item => {setDescricaoTarefa(item)}}
          />
         <DatePicker placeholder="Data" androidVariant="nativeAndroid" mode="date" style={styles.input} date={dateTarefa} onDateChange={setdateTarefa} />

        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={UpdateTarefa}>
            <TouchableOpacity onPress={()=> navigation.navigate('Tarefas')}>
             <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 20,
  },
  field: {
    borderColor: '#dcdcdc',
    padding: 10,
    fontSize: 15,
    color: '#333',
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#00cc99',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fdfdfd',
  },
  item: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    padding: 10,
    marginTop: 15,
    borderRadius: 3,
  },
  form: {
    flexDirection: 'row',
  },
});

export default UpdateTarefa;
