import { SCPObjectClass } from "./Models";

const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export default {
    light: {
        text: "#000",
        background: "#fff",
        tint: tintColorLight,
        tabIconDefault: "#ccc",
        tabIconSelected: tintColorLight,
    },
    dark: {
        text: "#fff",
        background: "#000",
        tint: tintColorDark,
        tabIconDefault: "#ccc",
        tabIconSelected: tintColorDark,
    },
};

export const SCPObjectClassColors: Record<SCPObjectClass, string> = {
    safe: "#00ff00",
    euclid: "#ffff00",
    keter: "#ff0000",
};

export const SCPObjectClassBackgroundColors: Record<SCPObjectClass, string> = {
    safe: "#000800",
    euclid: "#080800",
    keter: "#080000",
};
