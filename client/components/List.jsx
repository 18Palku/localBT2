import { View, StyleSheet, ScrollView } from "react-native";
import ListItem from "./ListItem";

const List = (props) => {
    return (
        <View style={styles.listContainer}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                <ListItem name="Royal Bus" time="05:00 PM" nav={props.nav} to={props.to} />
                <ListItem name="Govt. Bus" time="06:00 PM" nav={props.nav} to={props.to} />
                <ListItem name="Soni Bus" time="07:32 PM" nav={props.nav} to={props.to} />
                <ListItem name="Bharti Travels Bus" time="08:15 PM" nav={props.nav} to={props.to} />
                <ListItem name="Aarushi ki bus" time="11:05 PM" nav={props.nav} to={props.to} />
                <ListItem name="Govt. Bus" time="11:30 PM" nav={props.nav} to={props.to} />
                <ListItem name="Gaurav Travels" time="11:45 PM" nav={props.nav} to={props.to} />
                <ListItem name="Rakesh Bus" time="12:00 AM" nav={props.nav} to={props.to} />
                <ListItem name="Avdhesh ki Bus" time="01:05 AM" nav={props.nav} to={props.to} />
                <ListItem name="Along Travels" time="01:40 AM" nav={props.nav} to={props.to} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
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