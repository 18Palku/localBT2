import { View, Text, Image, TouchableOpacity, StyleSheet, Vibration } from "react-native";
import Input from '../components/Input';
import TimePicker from '../components/TimePicker';
import List from '../components/List';
import { useState } from "react";

const Home = ({ navigation }) => {
    let [to, setTo] = useState("");
    let [isOk, setIsOk] = useState(false);
    const childDataFetch = (data) => {
        setTo(data);
    }

    const search = () => {
        Vibration.vibrate(10);
        if (to.length) {
            console.log("where are my buses");
        }
    }

    return (
        <View>
            <Input from="From" where="L" childDataFetch={null} />
            <Input from="To" where="R" childDataFetch={childDataFetch} />
            <TimePicker />
            <TouchableOpacity onPress={search} style={styles.btn}>
                <Image style={styles.srhLogo} source={require("../assets/loupe.png")} />
                <Text style={styles.btnText}>Find Buses</Text>
            </TouchableOpacity>
            <List to={to} nav={navigation} />
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