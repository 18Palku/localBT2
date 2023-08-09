import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Status from './components/Status'
import Input from './components/Input';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>local bt</Text>
    //   <StatusBar style="auto" />
    //   <Status/>
    // </View>
    <View>
      <Status/>
      <Input from="From" where="L"/>
      <Input from ="To" where="R"/>
      
    </View>
   
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
