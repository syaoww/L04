import react from 'react';
import { View, Text, StyleSheet } from 'react-native';

// ========= Exercise 1 =========
// const Exercise1 = () => {
//   return (
//       <View>
//         <Text style={{fontSize: 24}}>Value</Text>
//         <Text style={{color: 'green'}}>Excellence</Text>
//         <Text style={{backgroundColor: 'yellow'}}>Customer-centric</Text>
//         <Text style={{fontStyle: 'italic'}}>Integrity</Text>
//         <Text style={{textAlign: 'center'}}>Teamwork</Text>
//         <Text style={{color: 'white', backgroundColor: 'black'}}>Enterprising</Text>
//       </View>
//   );
// };
//
// export default Exercise1;


// ========= Exercise 2 =========
// const styles = StyleSheet.create({
//   greenBox: {
//     width: 100,
//     height: 100,
//     marginTop: 30,
//     backgroundColor: 'green',
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   boxText: {
//     textAlign: 'center',
//     color: 'white'
//   },
//   title: {
//     fontWeight: 'bold',
//   }
// });
//
// const Exercise2 = () => {
//   return (
//       <View>
//         <View style={styles.greenBox}>
//           <Text style={[styles.boxText, styles.title]}>Who We Are</Text>
//           {/*[] two stylesheets, put in an array*/}
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>Our People</Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>Our Campus</Text>
//         </View>
//       </View>
//   );
// };
//
// export default Exercise2;


// ========= Exercise 3A =========
// const styles = StyleSheet.create({
//   parent: {
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24
//   }
// })
// const Exercise3A = () => {
//   return (
//       <View style={styles.parent}>
//         <Text style={[styles.child, {backgroundColor: 'powderblue'}]}>
//           Child One
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'skyblue'}]}>
//           Child Two
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'steelblue'}]}>
//           Child Three
//         </Text>
//       </View>
//   );
// };
//
// export default Exercise3A;


// ========= Exercise 3B =========
// const styles = StyleSheet.create({
//   parent: {
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//     flex: 1
//   },
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     flex: 1
//   }
// })
// const Exercise3B = () => {
//   return (
//       <View style={styles.parent}>
//         <Text style={[styles.child, {backgroundColor: 'powderblue'}]}>
//           Child One
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'skyblue'}]}>
//           Child Two
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'steelblue'}]}>
//           Child Three
//         </Text>
//       </View>
//   );
// };
//
// export default Exercise3B;


// ========= Exercise 3C =========
// const styles = StyleSheet.create({
//   parent: {
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//     flex: 1
//   },
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//     flex: 1
//   }
// })
// const Exercise3C = () => {
//   return (
//       <View style={styles.parent}>
//         <Text style={[styles.child, {backgroundColor: 'powderblue', maxWidth: 90}]}>
//           Child One
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'skyblue'}]}>
//           Child Two
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'steelblue', maxHeight: 120}]}>
//           Child Three
//         </Text>
//       </View>
//   );
// };
//
// export default Exercise3C;


// ========= Exercise 3D =========
// const styles = StyleSheet.create({
//   parent: {
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   }
// })
// const Exercise3D = () => {
//   return (
//       <View style={styles.parent}>
//         <Text style={[styles.child, {backgroundColor: 'powderblue', flex: 1}]}>
//           Child One
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'skyblue', flex: 2}]}>
//           Child Two
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'steelblue', flex: 3}]}>
//           Child Three
//         </Text>
//       </View>
//   );
// };
//
// export default Exercise3D;


// ========= Exercise 3E =========
// const styles = StyleSheet.create({
//   parent: {
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//     flex: 1,
//     // justifyContent: 'flex-start',
//     // justifyContent: 'flex-end'
//     justifyContent: 'space-around'
//     // justifyContent: 'space-between',
//   },
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   }
// })
// const Exercise3E = () => {
//   return (
//       <View style={styles.parent}>
//         <Text style={[styles.child, {backgroundColor: 'powderblue'}]}>
//           Child One
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'skyblue'}]}>
//           Child Two
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'steelblue'}]}>
//           Child Three
//         </Text>
//       </View>
//   );
// };
//
// export default Exercise3E;


// ========= Exercise 4 =========
const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    // marginTop: 30,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    width: 80,
    height: 80,
    justifyContent: 'center',
  },
  boxText: {
    textAlign: 'center',
    color: 'black',
  },
});

const Exercise4 = () => {
  return (
      <View style={styles.parent}>
        <View style={[styles.box, {backgroundColor: 'lightsteelblue'}]}>
          <Text style={styles.boxText}>Square 1</Text>
        </View>
        <View style={[styles.box, {backgroundColor: 'darkseagreen'}]}>
          <Text style={styles.boxText}>Square 2</Text>
        </View>
        <View style={[styles.box, {backgroundColor: 'darksalmon'}]}>
          <Text style={styles.boxText}>Square 3</Text>
        </View>
      </View>
  );
};

export default Exercise4;