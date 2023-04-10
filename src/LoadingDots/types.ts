import { StyleProp, ViewStyle } from "react-native";

export type LoadingDotsProps = {
    animation?: "elastic" | "flashing" | "typing" | "ping" | 'pulse' | undefined;
    dots?: number;
    color?: string;
    size?: number;
    spacing?: number;
    delay?: number;
    containerStyle?: StyleProp<ViewStyle>;
};