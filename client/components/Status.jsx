import { StatusBar } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

const Status = () => {
    const [fontsLoaded] = useFonts({
        "Borel-Regular": require("../assets/fonts/Borel-Regular.ttf"),
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
        <View>
            <StatusBar backgroundColor="#43AA8B" barStyle="dark-content" />
            <View style={styles.heading}>
                <Text style={styles.headingText}>
                    Local Bt
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        backgroundColor: "#43AA8B",
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 15,
    },
    headingText: {
        fontSize: 30,
        color: "white",
        top: 4,
        fontFamily: "Borel-Regular",
    },
})

export default Status;
