import { View, TextInput, StyleSheet, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

const Input = (props) => {

    let [to, setTo] = useState("");
    const [fontsLoaded] = useFonts({
        "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    });
    if (props.childDataFetch) {
        props.childDataFetch(to);
    }

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);
    if (!fontsLoaded) {
        return undefined;
    } else {
        SplashScreen.hideAsync();
    }

    let styleView = null;
    (props.where === "L" ? styleView = styles.containerLeft : styleView = styles.containerRight);
    if (props.where === "L") {
        return (
            <View style={styleView}>
                <Image source={require("../assets/house.png")} style={styles.imageLeft} />
                <TextInput style={styles.input} placeholder={props.from} value="Nalti" editable={false} />
            </View>
        )
    } else {
        return (
            <View style={styleView}>
                <TextInput style={styles.input} placeholder={props.from} onChangeText={setTo}
                    value={to} />
                <Image source={require("../assets/location.png")} style={styles.imageRight} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#28965A',
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 4,
        fontFamily: "Roboto-Medium",
    },
    containerLeft: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 10,
        margin: 4,
        top: 10,
    },
    containerRight: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 4,
        marginLeft: 4,
        marginRight: 4,
        marginBottom: 7,
    },
    inputText: {
        padding: 4,
        bottom: 4,
    },
    imageLeft: {
        height: 26,
        width: 26,
        padding: 4,
        bottom: 4,
        marginRight: 11,
    },
    imageRight: {
        height: 26,
        width: 26,
        padding: 4,
        bottom: 4,
        marginLeft: 10,
    }
});

export default Input;