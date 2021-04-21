import React, {useState} from 'react';
import api from '../services/axios';
import DatePicker from 'react-native-date-picker';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';


const AddTarefa = ({navigation}) => {

  const [tituloTarefa, setTituloTarefa] = useState("");
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [dateTarefa, setdateTarefa] = useState(new Date());

  const createTarefa = async () => {
  
    if (tituloTarefa && descricaoTarefa){
      try{
        const response = await api.post('/todo', {"titulo": tituloTarefa, "descricao": descricaoTarefa, "date":dateTarefa});
        console.log(JSON.stringify(response.data));
        navigation.navigate('Tarefas');
      } catch (error) {
        console.log("DEU RUIM" + error);
      }
    } else {
      console.log("Preencha com a tarefa desejada")
    }
  }
  
  const volta = ()=>{
    navigation.navigate('Tarefas')
  }

  return(
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Criar Tarefas</Text>
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
          <TouchableOpacity style={styles.button} onPress={createTarefa}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </>
  );
}


// const AddTarefa = () => {
//   const [task, updateTask] = useState('');
//   const [tasks, updateTasks] = useState([]);

// const handleAdd = () => {
//   if (tituloTarefa.trim() && descricaoTarefa.trim()) {
//     setTituloTarefa([...tasks, task]);
//     updateTask('')
//   }
// };
  

//   const handleRenderTask = ({item}) => <Text style={styles.item}>{item}</Text>
//   return (
//     <SafeAreaView>
//       <View style={styles.container}>
//         <Text style={styles.title}>Crie sua tarefa</Text>
//         <View style={styles.form}>
//           <TextInput
//             style={styles.field}
//             autoCapitalize="none"
//             autoCompleteType="off"
//             onChangeText={text => updateTask(text)}
//             value={task}
//           />
//           <TouchableWithoutFeedback onPress={handleAdd}>
//             <View style={styles.button}>
//               <Text style={styles.buttonText}>Adicionar</Text>
//             </View>      
//           </TouchableWithoutFeedback>
//         </View>
//         <FlatList
//           data={tasks}
//           keyExtractor={item => item}
//           renderItem={handleRenderTask}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };



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
  textAreaContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  }
});

export default AddTarefa;