import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { PropsWithChildren } from "react";
import { ImageBackground } from "react-native";

export default function HomeBackground(props: PropsWithChildren<{}>) {
    return (
        <ImageBackground style={{ flex: 1 }} source={require("@/assets/images/background.png")}>
            <ImageBackground
                style={{ flex: 1 }}
                source={require("@/assets/images/grid.png")}
                imageStyle={{ resizeMode: "repeat", opacity: 0.5 }}
            >
                <LinearGradient
                    style={{
                        backgroundColor: "rgba(0,0,0,0.75)",
                        flex: 1,
                        paddingTop: 64,
                    }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.5 }}
                    colors={["transparent", "black"]}
                >
                    <MaskedView
                        style={{
                            flex: 1,
                            position: "absolute",
                            right: "-25%",
                            height: "100%",
                            justifyContent: "center",
                        }}
                        maskElement={
                            <LinearGradient
                                style={{ flex: 1 }}
                                colors={["black", "transparent"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0, y: 0.6 }}
                            ></LinearGradient>
                        }
                    >
                        {/* <Image
                            source={require("@/assets/images/background_art.png")}
                            style={{
                                width: 400,
                                opacity: 0.25,
                                objectFit: "contain",
                            }}
                        ></Image> */}
                    </MaskedView>
                    {props.children}
                </LinearGradient>
            </ImageBackground>
        </ImageBackground>
    );
}
