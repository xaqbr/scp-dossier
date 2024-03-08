import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Text, View } from "../core/Themed";

export type ArticleHeaderProps = {
    title: string;
    style?: StyleProp<ViewStyle>;
};

export default function ArticleHeader(props: ArticleHeaderProps) {
    return (
        <View style={[styles.container, props.style]}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
    },
    title: {
        fontFamily: "Josefin",
        fontSize: 32,
    },
});
