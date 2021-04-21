// import React from 'react';
// import AddTarefa from './components/AddTarefa';
// const App = () => <AddTarefa />;
// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

import toDoList from './components/HomeScreen';
import AddTarefa from './components/AddTarefa';
import UpdateTarefa from './components/UpdateTarefa';

const Page = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Page.Navigator>
        <Page.Screen 
          name='Tarefas' 
          component={toDoList} 
          options={{
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#EFCA08",
            }
          }}
        />
        <Page.Screen 
          name='Add' 
          component={AddTarefa}
          options={{
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#EFCA08"
            }
          }}
        />
        <Page.Screen 
          name="Update" 
          component={UpdateTarefa}
          options={{
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#EFCA08"
            }
          }}
        />
      </Page.Navigator>
    </NavigationContainer>
  );
}
export default App;


// import React, { useState } from 'react';
// import {
//   FlatList,
//   ScrollView,
//   View,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'

// // import Lista from './components/AddTarefa';


// const toDoList = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.tituloPg}>
//           Minhas Tarefas
//         </Text>

//         <Text style={styles.navegarPlus}>
//           +
//         </Text>
//       </View>
//       <ScrollView style={styles.tarefas}>
//         <FlatList
//           data={[1, 2, 3]}
//           renderItem={() => {
//             return (
//               <View style={styles.blocoTarefa}>
//                 <View style={styles.blocoEsquerda}>
//                   <Text style={styles.titulo}>
//                     Estender Roupa
//                   </Text>

//                   <Text style={styles.descricao}>
//                     Esta tarefa é apenas um teste de layout
//                     Esta tarefa é apenas um teste de layout
//                     Esta tarefa é apenas um teste de layout
//                   </Text>
//                 </View>

//                 <View style={styles.blocoDireita}>
//                   <View style={styles.blocoData}>
//                       <Text style={styles.data}>
//                         07{"\n"}
//                         ABRIL{"\n"}
//                         2020
//                       </Text>
//                   </View>
//                 </View>
//               </View>
//             )
//           }}
//         />
//       </ScrollView>
//     </View>
//   )
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   },

//   form: {

//   },

//   header: {
//     height: 60,
//     paddingTop: 12,
//     paddingLeft: 15,
//     paddingRight: 15,
//     marginBottom: 10,
//     backgroundColor: '#EFCA08',
//     flexDirection: "row",
//     justifyContent: 'space-between',
//   },

//   tituloPg: {
//     fontSize: 24,
//     color: '#fff',
//     fontWeight: 'bold',
//   },

//   navegarPlus: {
//     fontSize: 35,
//     color: '#fff',
//     fontWeight: 'bold',
//     marginTop: -7,
//   },

//   blocoTarefa: {
//     flex: 1,
//     borderTopWidth: 2,
//     borderBottomWidth: 2,
//     borderColor: '#cecece',
//     marginTop: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },

//   blocoEsquerda: {
//     width: 340,
//     padding: 10,
//   },

//   titulo: {
//     fontSize: 20,
//     fontStyle: 'italic',
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },

//   blocoDireita: {
//     backgroundColor: '#00A6A6',
//     width: 60,
//   },  
//   blocoData: {
//     padding: 5,

//   },
//   data: {
//     fontSize: 16,
//     color: '#fff',
//     fontWeight: 'bold',
//   }
// })
// export default toDoList;