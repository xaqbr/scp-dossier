import { LinearGradient } from "expo-linear-gradient";
import { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Text, View } from "../core/Themed";

export type SeparatorProps = {
    label: string;
    style?: StyleProp<ViewStyle>;
};

export default function Section(props: PropsWithChildren<SeparatorProps>) {
    return (
        <>
            <LinearGradient
                colors={["transparent", "black"]}
                style={[styles.container, props.style]}
            >
                <Text style={styles.text}>{props.label}</Text>
            </LinearGradient>
            {props.children && (
                <>
                    <View style={[styles.childContainer]}>{props.children}</View>
                    <LinearGradient style={styles.footer} colors={["transparent", "black"]} />
                </>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 8,
        backgroundColor: "rgba(20,20,20,255)",
        paddingVertical: 6,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "rgba(255,255,255,0.05)",
    },
    childContainer: {
        paddingVertical: 16,
    },
    footer: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: "rgba(20,20,20,255)",
        borderColor: "rgba(255,255,255,0.05)",
        height: 12,
    },
    text: {
        fontFamily: "LatoBold",
        opacity: 0.8,
        paddingHorizontal: 4,
        paddingVertical: 2,
    },
    line: {
        flex: 1,
        height: 1,
        alignSelf: "center",
        backgroundColor: "rgba(255,255,255,0.3)",
    },
});
