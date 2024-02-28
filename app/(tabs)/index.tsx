import { View } from "@/components/core/Themed";
import HomeBackground from "@/components/home/HomeBackground";
import HomeFeaturedArticle from "@/components/home/HomeFeaturedArticle";
import HomeHeader from "@/components/home/HomeHeader";
import Section from "@/components/shared/Section";
import { SCPObjectClass } from "@/constants/Models";
import { Tabs } from "expo-router";

export default function TabOneScreen() {
    return (
        <View style={{ flex: 1 }}>
            <Tabs.Screen options={{ headerShown: false }} />
            <HomeBackground>
                <HomeHeader style={{ paddingHorizontal: 24, marginBottom: 32 }} />
                <Section label="Featured SCPs" style={{ paddingHorizontal: 24 }}>
                    <View style={{ paddingHorizontal: 24, flexDirection: "row" }}>
                        <HomeFeaturedArticle
                            name="SCP-131"
                            index="131"
                            objectClass={SCPObjectClass.Safe}
                            description="No special safety procedures are to be taken with SCP-131-A and SCP-131-B."
                        ></HomeFeaturedArticle>
                    </View>
                </Section>
            </HomeBackground>
        </View>
    );
}
