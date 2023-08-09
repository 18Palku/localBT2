import { View,TextInput,StyleSheet,Text} from "react-native";

import{UseState} from 'react';


const Input=(props)=>{
    // let[fromValue, setFromValue]=useState(props.)
    let styleView = null;
    (props.where === "L" ? styleView = styles.containerLeft : styleView = styles.containerRight);
    return(
        <View style={styleView}>
            <Text style={styles.inputText}>
                {props.from}
            </Text>
            <TextInput style={styles.input} placeholder={props.from}/>

        </View>


    )
}



const styles = StyleSheet.create({
    
    input: {
          width: '80%',
          height: 40,
          borderWidth: 1,
          borderColor: 'gray',
          paddingHorizontal: 10,
          marginBottom: 10,
          borderRadius: 4,
        },
        containerLeft:{
            display:"flex",
            flexDirection: "row",
            justifyContent:"flex-start",
            alignItems: "center",
            padding: 10,
            margin: 4,
        },
        containerRight:{
            display:"flex",
            flexDirection: "row",
            justifyContent:"flex-end",
            alignItems: "center",
            // backgroundColor: "blue",
            padding: 10,
            margin: 4
        },
        inputText: {
            padding: 4,
            bottom: 4,
        }
    });
    
    
    // const Input=()=>{
        
    // function InputFieldsExample() {
    //     const [fromValue, setFromValue] = useState('From');
    //     const [toValue, setToValue] = useState('To');
      
    //     const handleFromChange = (From) => {
    //       setFromValue(From);
    //     };
      
    //     const handleToChange = (To) => {
    //       setToValue(To);
    //     };
    //     return (
    //         <View style={styles.container}>
    //           <TextInput
    //             style={styles.input}
    //             placeholder="From"
    //             value={fromValue}
    //             onChangeText={handleFromChange}
    //           />
    //           <TextInput
    //             style={styles.input}
    //             placeholder="To"
    //             value={toValue}
    //             onChangeText={handleToChange}
    //           />
    //         </View>
    //       );
    //     }
export default Input;