import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

const ListItem = (props) => {

    const showDetails = () => {
        props.nav.navigate("Details");
    }

    const [fontsLoaded] = useFonts({
        "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    });

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
    return (
        <TouchableHighlight style={styles.highlight} onPress={showDetails} underlayColor="white">
            <View style={styles.item}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.time}>{props.time}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    highlight: {
        height: "auto",
        width: "auto",
        borderRadius: 10,
        marginBottom: 8,
    },
    item: {
        height: 50,
        width: "auto",
        backgroundColor: "white",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#99D6C4",
        elevation: 2,
    },
    name: {
        fontSize: 18,
        marginLeft: 10,
        fontFamily: "Roboto-Medium",
    },
    time: {
        fontSize: 18,
        fontFamily: "Roboto-Medium",
        flexDirection: "row",
        marginRight: 10,
    },
})

export default ListItem;