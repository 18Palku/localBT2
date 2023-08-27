import { View, StyleSheet, ScrollView, Text } from "react-native";
import ListItem from "./ListItem";

const List = (props) => {
    const convertFourDigitToTime = (time) => {
        let curr = "" + time;
        let hrs = parseInt(curr[0] + curr[1]);
        let mins = curr[2] + curr[3];
        let ampm;
        if (hrs >= 12) ampm = "PM";
        else ampm = "AM";
        (hrs > 12) ? hrs = hrs - 12 : null;
        let res;
        if (hrs < 10) {
            res = "0" + hrs + ":" + mins + " " + ampm;
        } else {
            res = hrs + ":" + mins + " " + ampm;
        }
        return res;
    }
    console.log("List Comp:-> ", props.list)
    return (
        <View style={styles.listContainer}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
                {(props.list && props.to.length) ? props.list.length ?
                    props.list.map((ele) => {
                        return (
                            <ListItem key={ele[1]} name={ele[0]} time={convertFourDigitToTime(ele[1])} nav={props.nav} to={props.to} />
                        )
                    })
                    : <Text style={styles.errorTxt}>Sorry, No Buses avaible for the selected time till 12:00 AM</Text> :
                    <Text style={styles.errorTxt}>Please select your destination and bus timing</Text>
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    errorTxt: {
        height: 400,
        color: "white",
        fontSize: 20,
    },
    scroll: {
        width: "auto",
        height: "auto",
        paddingVertical: 10,
    },
    listContainer: {
        height: 370,
        width: "auto",
        backgroundColor: "#358970",
        marginHorizontal: 30,
        borderRadius: 10,
        elevation: 20,
        borderWidth: 5,
        borderColor: "#0E4749",
        paddingHorizontal: 10,
        marginTop: 10,
    },
    list: {

    },
})

export default List;