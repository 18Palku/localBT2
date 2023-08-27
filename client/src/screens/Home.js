import { View, Text, Image, TouchableOpacity, StyleSheet, Vibration, TouchableWithoutFeedback, Keyboard } from "react-native";
import Input from '../components/Input';
import TimePicker from '../components/TimePicker';
import List from '../components/List';
import { useEffect, useState } from "react";
import { Buses } from "../assets/data";

const Home = ({ navigation }) => {
    let [to, setTo] = useState("");
    let [time, setTime] = useState(new Date(1598051700000));
    let [list, setList] = useState(null);
    // let [isOk, setIsOk] = useState(false); //use it later for input validation.

    const childToFetch = (data) => {
        useEffect(() => {
            setTo(data);
        }, [data]);
    }

    const childTimeFetch = (data) => {
        useEffect(() => {
            setTime(data);
        }, [data])
        // console.log("time is:-> ", data.getDate());
    }

    const search = () => {
        Vibration.vibrate(10);
        let srch = [];
        if (to.length && time) {
            console.log("where are my buses", time.getHours());
            let mins = time.getMinutes();
            if (("" + time.getMinutes()).length == 1) mins = "0" + time.getMinutes();
            let idx = parseInt("" + time.getHours() + mins);
            console.log("idx:-> ", idx);
            for (let i = idx; i <= 2400; i++) {
                if (Buses[i]) {
                    let curr = [];
                    curr[0] = Buses[i];
                    curr[1] = i;
                    srch.push(curr);
                }
            }
        }
        setList(srch);
    }
    // console.log("home:-> ", list);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
                <Input from="From" where="L" childDataFetch={null} />
                <Input from="To" where="R" childDataFetch={childToFetch} />
                <TimePicker childTimeFetch={childTimeFetch} />
                <TouchableOpacity onPress={search} style={styles.btn}>
                    <Image style={styles.srhLogo} source={require("../assets/loupe.png")} />
                    <Text style={styles.btnText}>Find Buses</Text>
                </TouchableOpacity>
                <List list={list} to={to} nav={navigation} />
            </View>
        </TouchableWithoutFeedback>
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