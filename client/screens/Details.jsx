import { View, Text, StyleSheet, Image, Switch } from "react-native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Dropdown } from 'react-native-element-dropdown';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const data = [
    { label: '2 mins', value: '2' },
    { label: '5 mins', value: '5' },
    { label: '10 mins', value: '10' },
    { label: '15 mins', value: '15' },
    { label: '20 mins', value: '20' },
    { label: '30 mins', value: '30' },
    { label: '45 mins', value: '45' },
    { label: '1 Hour', value: '60' },
];

const Details = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Set Alarm
                </Text>
            );
        }
        return null;
    };

    const [fontsLoaded] = useFonts({
        "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    });

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
        <View style={styles.cont}>
            <Text style={styles.date}>Today</Text>
            <Text style={styles.name}>Bus Title</Text>
            <Text style={styles.time}>4:50 PM</Text>
            <View style={styles.map}>
                <View style={styles.fromContainer}>
                    <Text style={styles.from}>Nalti</Text>
                </View>
                <Image style={styles.bus} source={require("../assets/bus.png")} />
                <View style={styles.contTo}>
                    <Text style={styles.to}>Hamirpur</Text>
                </View>
            </View>
            <View style={styles.container}>
                {renderLabel()}
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select time duration' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                />
                <Switch
                    style={styles.switch}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            {isEnabled ? <CountdownCircleTimer
                isPlaying
                duration={value * 60}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[((value * 60) / 1.33), ((value * 60) / 2), ((value * 60) / 4), 1]}
            >
                {({ remainingTime }) =>
                    <View style={styles.cntTime}>
                        <Text style={styles.secText}>Remaining</Text>
                        <Text style={styles.priText}>{Math.ceil(remainingTime / 60)}</Text>
                        <Text style={styles.secText}>Mins</Text>
                    </View>}
            </CountdownCircleTimer> : <Text style={styles.txt}>Alarm not set</Text>}
            <View style={styles.footer}>
                <Text style={styles.footerPri}>Thank You</Text>
                <Text style={styles.footerSec}>A&P Pvt. Ltd. All Rights Reserved(2023)</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        color: "red",
        fontSize: 15,
        fontFamily: "Roboto-Medium",
    },
    footer: {
        height: 100,
        width: 400,
        backgroundColor: "#43AA8B",
        marginTop: 25,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 600,
    },
    footerPri: {
        fontSize: 20,
        color: "white",
        bottom: 5,
    },
    footerSec: {
        color: "white",
        bottom: 5,
    },
    priText: {
        fontSize: 40,
        fontFamily: "Roboto-Medium",
    },
    secText: {
        fontSize: 20,
    },
    cntTime: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    fromContainer: {
        height: 40,
        width: 60,
        backgroundColor: "#43AA8B",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
    },
    contTo: {
        height: 40,
        width: "auto",
        backgroundColor: "#43AA8B",
        padding: 4,
        alignSelf: "flex-end",
        borderRadius: 10,
    },
    time: {
        fontFamily: "Roboto-Medium",
        fontSize: 22,
        marginBottom: 30,
    },
    from: {
        fontFamily: "Roboto-Medium",
        fontSize: 20,
        color: "white"
    },
    to: {
        fontFamily: "Roboto-Medium",
        fontSize: 20,
        color: "white",
    },
    map: {
        display: "flex",
        flexDirection: "row",
    },
    cont: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    name: {
        fontSize: 40,
        fontFamily: "Roboto-Medium",
    },
    date: {
        color: "grey",
        fontSize: 20,
        fontFamily: "Roboto-Medium",
        marginTop: 10,
    },
    bus: {
        height: 150,
        width: 150,
        marginRight: 20,
        left: 13,
    },
    container: {
        backgroundColor: 'white',
        padding: 16,
        width: "auto",
        display: "flex",
        flexDirection: "row",
        marginTop: 15,
        marginBottom: 15,
    },
    dropdown: {
        height: 50,
        width: 300,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        fontFamily: "Roboto-Medium",
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    switch: {
        marginLeft: 6,
    }
})

export default Details;