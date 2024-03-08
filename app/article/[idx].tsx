import ArticleBackground from "@/components/article/ArticleBackground";
import { ArticleIndex as ArticleModel } from "@/constants/Models";
import { initDatabase } from "@/lib/db";
import { SplashScreen, Tabs, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function Article() {
    const [article, setArticle] = useState<ArticleModel>();
    const { idx } = useLocalSearchParams<{ idx: string }>();

    useEffect(() => {
        console.log(initDatabase());
        // Load article from backend.
        // fetchArticle(`scp-${idx}`).then(function (data) {
        //     setArticle(data);
        // }, console.error);
    }, []);

    return (
        <ArticleBackground backgroundUrl={article?.thumbnailUrl}>
            <Tabs.Screen
                options={{
                    headerShown: false,
                }}
            />
            {/* <ArticleHeader title={article?.index || "---"} style={{ paddingHorizontal: 24 }} />
            <ScrollView>
                <Text>{article?.content}</Text>
            </ScrollView> */}
        </ArticleBackground>
    );
}
