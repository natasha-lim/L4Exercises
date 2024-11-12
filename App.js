// //**********************Exercise 1*************************
// import React from 'react';
// import {View, Text} from 'react-native';
//
// const Exercise1 = () => {
//   return (
//       <View>
//         <Text></Text>
//         <Text></Text>
//         <Text style={{fontSize:24}}>Values</Text>
//         <Text style={{color:'green'}}>Excellence</Text>
//         <Text style={{backgroundColor:'yellow'}}>Customer-Centric</Text>
//         <Text style={{fontStyle:'italic'}}>Integrity</Text>
//         <Text style={{textAlign:'center'}}>Teamwork</Text>
//         <Text style={{backgroundColor:'black', color:'white'}}>Enterprising</Text>
//       </View>
//   );
// };

// //*****************Exercise 2*****************
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   greenBox:{
//     width:100,
//     height:100,
//     marginTop:30,
//     backgroundColor:'green',
//     borderWidth:1,
//     borderColor:'green'
//   },
//
//   boxText: {
//     textAlign:'center',
//     color:'white'
//   },
//
//   title: {
//     fontWeight:'bold'
//   }
// });
// const Exercise2 = () => {
//   return (
//       <View style={{marginTop: 50}}>
//         <Text>Exercise 2</Text>
//         <View style={styles.greenBox}>
//           <Text style={[styles.boxText, styles.title]}>Who we Are</Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={[styles.boxText,styles.title]}>Our People</Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={[styles.boxText, styles.title]}>Our Campus</Text>
//         </View>
//       </View>
//   );
// };

//*******************Exercise 3A*******************
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection:'row',
//     backgroundColor:'#F5fcff',
//     borderColor:'#0099AA',
//     borderWidth: 5
//   },
//
//   Child: {
//     borderWidth: 2,
//     textAlign:'center',
//     fontSize: 24
//   }
// });
//
// const Exercise3A = () => {
//   return (
//       <View style={[styles.Parent, {marginTop: 50}]}>
//         <View>
//           <Text style={[styles.Child, {backgroundColor:'powderblue'}] }>Child 1</Text>
//         </View>
//         <View>
//           <Text style={[styles.Child, {backgroundColor:'skyblue'}]}>Child 2</Text>
//         </View>
//         <View>
//           <Text style={[styles.Child, {backgroundColor:'steelblue'}]}>Child 3</Text>
//         </View>
//       </View>
//   )
// }

// // //*************************Exercise 3B******************
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex:1,
//     flexDirection:'column',
//     backgroundColor:'#F5fcff',
//     borderColor:'#0099AA',
//     borderWidth: 5
//   },
//
//   Child: {
//     flex:1,
//     borderWidth: 2,
//     textAlign:'center',
//     fontSize: 24
//   }
// });
//
// const Exercise3B = () => {
//   return (
//       <View style={[styles.Parent, {marginTop: 50}]}>
//           <Text style={[styles.Child, {backgroundColor:'powderblue'}] }>Child 1</Text>
//           <Text style={[styles.Child, {backgroundColor:'skyblue'}]}>Child 2</Text>
//           <Text style={[styles.Child, {backgroundColor:'steelblue'}]}>Child 3</Text>
//       </View>
//   )
// }

// // //*************************Exercise 3C******************
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex:1,
//     flexDirection:'column',
//     backgroundColor:'#F5fcff',
//     borderColor:'#0099AA',
//     borderWidth: 5
//   },
//
//   Child: {
//     flex:1,
//     borderWidth: 2,
//     textAlign:'center',
//     fontSize: 24
//   }
// });
//
// const Exercise3C = () => {
//   return (
//       <View style={[styles.Parent, {marginTop: 50}]}>
//         <Text style={[styles.Child, {backgroundColor:'powderblue', maxWidth: 90}] }>Child 1</Text>
//         <Text style={[styles.Child, {backgroundColor:'skyblue'}]}>Child 2</Text>
//         <Text style={[styles.Child, {backgroundColor:'steelblue', maxHeight: 120}]}>Child 3</Text>
//       </View>
//   )
// }

// // //*************************Exercise 3D******************
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection:'row',
//     backgroundColor:'#F5fcff',
//     borderColor:'#0099AA',
//     borderWidth: 5
//   },
//
//   Child: {
//     borderWidth: 2,
//     textAlign:'center',
//     fontSize: 24
//   }
// });
//
// const Exercise3D = () => {
//   return (
//       <View style={[styles.Parent, {marginTop: 50}]}>
//         <Text style={[styles.Child, {backgroundColor:'powderblue', flex:1}] }>Child 1</Text>
//         <Text style={[styles.Child, {backgroundColor:'skyblue', flex:2}]}>Child 2</Text>
//         <Text style={[styles.Child, {backgroundColor:'steelblue', flex:3}]}>Child 3</Text>
//       </View>
//   )
// }

// // //*************************Exercise 3E******************
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1,
//     flexDirection:'column',
//     //justifyContent:'flex-start',
//     // justifyContent:'flex-end',
//     // justifyContent:'space-around',
//     justifyContent:'space-between',
//     backgroundColor:'#F5fcff',
//     borderColor:'#0099AA',
//     borderWidth: 5
//   },
//
//   Child: {
//     borderWidth: 2,
//     textAlign:'center',
//     fontSize: 24
//   }
// });
//
// const Exercise3E = () => {
//   return (
//       <View style={[styles.Parent, {marginTop: 50}]}>
//         <Text style={[styles.Child, {backgroundColor:'powderblue'}] }>Child 1</Text>
//         <Text style={[styles.Child, {backgroundColor:'skyblue'}]}>Child 2</Text>
//         <Text style={[styles.Child, {backgroundColor:'steelblue'}] }>Child 3</Text>
//       </View>
//   )
// }

// //*************************Exercise 4******************
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Parent: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'whitesmoke',
    marginTop:50,
    alignItems: 'center',
  },

  Child: {
    width: 80,
    height:80,
    alignItems:'center',
    textAlign:'center',
    textAlignVertical:'center',
    fontSize: 24
  }
});

const Exercise4 = () => {
  return (
      <View style={[styles.Parent, {marginTop: 50}]}>
        <Text style={[styles.Child, {backgroundColor:'powderblue'}] }>Square 1</Text>
        <Text style={[styles.Child, {backgroundColor:'skyblue'}]}>Square 2</Text>
        <Text style={[styles.Child, {backgroundColor:'steelblue'}] }>Square 3</Text>
      </View>
  )
}
export default Exercise4;
