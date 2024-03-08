import { SCPObjectClassColors } from "@/constants/Colors";
import { ArticleIndex } from "@/constants/Models";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { ImageBackground, StyleSheet } from "react-native";
import { Text } from "../core/Themed";

export type HomeFeaturedArticleProps = {
    article: ArticleIndex;
};

export default function HomeFeaturedArticle(props: HomeFeaturedArticleProps) {
    return (
        <Link href={{ pathname: "/article/[idx]", params: { idx: props.article.index } }}>
            <LinearGradient
                style={[styles.container]}
                colors={[SCPObjectClassColors[props.article.objectClass], "transparent"]}
            >
                <ImageBackground
                    source={{
                        uri: "https://scp-wiki.wdfiles.com/local--files/scp-131/131volgun.png",
                    }}
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
                                { color: SCPObjectClassColors[props.article.objectClass] },
                            ]}
                        >
                            {props.article.objectClass}
                        </Text>
                        <Text style={styles.nameLabel}>{props.article.title}</Text>

                        <Text style={styles.description}>{props.article.content.slice(0, 64)}</Text>
                    </LinearGradient>
                </ImageBackground>
            </LinearGradient>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 140,
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
