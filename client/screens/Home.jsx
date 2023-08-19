import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Input from '../components/Input';
import TimePicker from '../components/TimePicker';
import List from '../components/List';
const Home = ({ navigation }) => {
    // console.log("navigation:-> ", navigation);
    return (
        <View>
            <Input from="From" where="L" />
            <Input from="To" where="R" />
            <TimePicker />
            <TouchableOpacity style={styles.btn}>
                <Image style={styles.srhLogo} source={require("../assets/loupe.png")} />
                <Text style={styles.btnText}>Find Buses</Text>
            </TouchableOpacity>
            <List nav={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#4BC19D",
        height: 50,
        width: "auto",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
        marginHorizontal: 30,
        flexDirection: "row",
        elevation: 15,
    },
    btnText: {
        color: "white",
        fontSize: 28,
    },
    srhLogo: {
        height: 35,
        width: 35,
        right: 20,
    }
});

export default Home;