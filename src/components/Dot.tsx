import React from "react";
import { Animated, View } from "react-native";

import { styles } from "../util/animation-style";
import { useLoadingContext } from "./context";

export const Dot = ({ dynamicSize }: { dynamicSize: Animated.Value }) => {

    const { animation, color, size, spacing } = useLoadingContext();

    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: size,
                width: size,
                margin: spacing,
            }}
        >
            <Animated.View style={styles(animation, color, size, dynamicSize)} />
        </View>
    );
};