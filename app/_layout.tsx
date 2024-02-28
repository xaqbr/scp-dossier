import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import {
    JosefinSans_400Regular,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium,
    JosefinSans_500Medium_Italic,
    JosefinSans_700Bold,
    JosefinSans_700Bold_Italic,
} from "@expo-google-fonts/josefin-sans";
import {
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
} from "@expo-google-fonts/lato";

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    // TODO: These could be embedded statically
    // https://docs.expo.dev/develop/user-interface/fonts/#embed-font-in-a-native-project
    const [loaded, error] = useFonts({
        Josefin: JosefinSans_400Regular,
        JosefinItalic: JosefinSans_400Regular_Italic,
        JosefinBold: JosefinSans_700Bold,
        JosefinBoldItalic: JosefinSans_700Bold_Italic,
        JosefinMedium: JosefinSans_500Medium,
        JosefinMediumItalic: JosefinSans_500Medium_Italic,
        Lato: Lato_400Regular,
        LatoItalic: Lato_400Regular_Italic,
        LatoBold: Lato_700Bold,
        LatoBoldItalic: Lato_700Bold_Italic,
        ...FontAwesome.font,
    });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav />;
}

function RootLayoutNav() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false, animation: "fade" }} />
                <Stack.Screen name="modal" options={{ presentation: "modal", animation: "fade" }} />
            </Stack>
        </ThemeProvider>
    );
}
