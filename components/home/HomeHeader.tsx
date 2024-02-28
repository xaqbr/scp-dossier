import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Text, View } from "../core/Themed";

// JR. RESEARCHER   XXXXXX
// SEC. OFFICER     XXXXXX
// CONT. SPECIALIST XXXXXX
// SNR. RESEARCHER  XXXXXX
// TAC.RES. OFFICER XXXXXX
// MTF XXXX-X OP.   XXXXXX
// SITE XX DIRECTOR XXXXXX
// O5-X             XXXXXX

export type HomeProps = {
    style?: StyleProp<ViewStyle>;
};

export default function HomeHeader(props: HomeProps) {
    return (
        <View style={[{ backgroundColor: "transparent" }, props.style]}>
            <Text style={[styles.text, { fontSize: 12, opacity: 0.75 }]}>
                LOGGED IN - CLEARANCE Lv. 5/3029
            </Text>
            <Text style={[styles.text, { fontSize: 12, marginBottom: 32, opacity: 0.75 }]}>
                CLASS: D-3092
            </Text>
            <View style={{ backgroundColor: "transparent", alignItems: "flex-end" }}>
                <Text style={[styles.subtitle]}>WELCOME</Text>
                <Text style={[styles.title, { textAlign: "right" }]}>
                    JR. RESEARCHER SEAN BENOIT
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "JosefinBold",
        fontSize: 16,
    },
    subtitle: {
        fontFamily: "JosefinMediumItalic",
        fontSize: 20,
        backgroundColor: "black",
        borderWidth: 0.2,
        borderColor: "rgba(255,255,255,0.3)",
        paddingBottom: 2,
        paddingHorizontal: 12,
        color: "rgba(255,255,255,0.8)",
    },
    title: {
        fontFamily: "JosefinItalic",
        fontSize: 32,
    },
});
