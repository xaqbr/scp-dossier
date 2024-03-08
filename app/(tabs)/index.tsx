import { View } from "@/components/core/Themed";
import HomeBackground from "@/components/home/HomeBackground";
import HomeFeaturedArticle from "@/components/home/HomeFeaturedArticle";
import HomeHeader from "@/components/home/HomeHeader";
import Section from "@/components/shared/Section";
import { ArticleIndex, SCPObjectClass } from "@/constants/Models";
import { Tabs } from "expo-router";
import { FlatList } from "react-native";

const featuredArticles: ArticleIndex[] = [
    {
        title: "SCP-131",
        index: "131",
        objectClass: SCPObjectClass.Safe,
        content: "No special safety procedures are to be taken with SCP-131-A and SCP-131-B.",
        thumbnailUrl: "",
    },
    {
        title: "SCP-132",
        index: "132",
        objectClass: SCPObjectClass.Euclid,
        content: "No special safety procedures are to be taken with SCP-131-A and SCP-131-B.",
        thumbnailUrl: "",
    },
    {
        title: "SCP-133",
        index: "133",
        objectClass: SCPObjectClass.Keter,
        content: "No special safety procedures are to be taken with SCP-131-A and SCP-131-B.",
        thumbnailUrl: "",
    },
];

export default function TabOneScreen() {
    return (
        <View style={{ flex: 1 }}>
            <Tabs.Screen options={{ headerShown: false }} />
            <HomeBackground>
                <HomeHeader style={{ paddingHorizontal: 24, marginBottom: 32 }} />
                <Section label="Featured SCPs" style={{ paddingHorizontal: 24 }}>
                    <View style={{ flexDirection: "row" }}>
                        <FlatList
                            contentContainerStyle={{ gap: 8, paddingHorizontal: 24 }}
                            horizontal
                            data={featuredArticles}
                            renderItem={({ item }) => <HomeFeaturedArticle article={item} />}
                            keyExtractor={(item) => item.index}
                        ></FlatList>
                    </View>
                </Section>
            </HomeBackground>
        </View>
    );
}
