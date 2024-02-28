import { SCPObjectClassColors } from "@/constants/Colors";
import { SCPObjectClass } from "@/constants/Models";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet } from "react-native";
import { Text } from "../core/Themed";

export type HomeFeaturedArticleProps = {
    name: string;
    index: string;
    description?: string;
    objectClass: SCPObjectClass;
};

export default function HomeFeaturedArticle(props: HomeFeaturedArticleProps) {
    return (
        <LinearGradient
            style={[styles.container]}
            colors={[SCPObjectClassColors[props.objectClass], "transparent"]}
        >
            <ImageBackground
                source={{ uri: "https://scp-wiki.wdfiles.com/local--files/scp-131/131volgun.png" }}
            >
                <LinearGradient
                    style={{
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                        backgroundColor: "rgba(0,0,0,0.7)",
                    }}
                    colors={["transparent", "black"]}
                >
                    <Text
                        style={[
                            styles.classLabel,
                            { color: SCPObjectClassColors[props.objectClass] },
                        ]}
                    >
                        {props.objectClass}
                    </Text>
                    <Text style={styles.nameLabel}>{props.name}</Text>

                    <Text style={styles.description}>{props.description}</Text>
                </LinearGradient>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        minWidth: "50%",
        maxWidth: "50%",
        padding: StyleSheet.hairlineWidth,
    },
    classLabel: {
        fontFamily: "JosefinBold",
        fontSize: 10,
        textTransform: "uppercase",
        textShadowOffset: { height: 1, width: 0 },
        textShadowColor: "black",
        textShadowRadius: 4,
    },
    nameLabel: {
        fontSize: 16,
        fontFamily: "LatoBold",
        textShadowOffset: { height: 1, width: 0 },
        textShadowColor: "black",
        textShadowRadius: 4,
        marginBottom: 4,
    },
    description: {
        fontSize: 10,
        opacity: 0.3,
        textShadowOffset: { height: 1, width: 0 },
        textShadowColor: "black",
        textShadowRadius: 4,
        fontFamily: "LatoItalic",
        maxHeight: 24,
        overflow: "hidden",
    },
});
