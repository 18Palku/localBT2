import{StatusBar} from "react-native";
import{Text,View,StyleSheet} from "react-native";





const Status=()=>{


return(
    <View>
         <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
         <View style={styles.heading}>
            
             <Text style={styles.headingText}> 
                LOCAL BT

             </Text>
              </View>  
        

        
    </View>

);
}
 const styles = StyleSheet.create({
    heading:{
        backgroundColor:"#43AA8B",
        height:65,
        justifyContent:'center',
        alignItems:'center',
        
        
        
    },
    headingText:{
        fontSize:30,
        backgroundColor:"white",
        


    },


})

export default Status;
