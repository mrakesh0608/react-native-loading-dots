import React, { useState } from "react";
import { Animated } from "react-native";

import { animationStyle } from "../util/animation-style";
import { useLoadingContext } from "./context";
import { Dot } from "./Dot";

export function Container() {

    const { animation, dots, size, delay, containerStyle } = useLoadingContext();

    const [visible, setVisible] = useState(false);

    const animatedValues = (animation: string | undefined) => {
        switch (animation) {
            case "pulse":
                return Number(0);
            case "elastic":
                return Number(1);
            case "flashing":
                return Number(size);
            case "typing":
                return Number(0);
            case "ping":
                return Number(1);
            default:
                return Number(0);
        }
    };

    const list = Array.from(
        Array(dots),
        () => new Animated.Value(animatedValues(animation))
    );

    const run = (nodes: Animated.Value[]) => {
        Animated.parallel(
            nodes.map((node, index) =>
                animationStyle({
                    animation,
                    delay: index * (delay ? delay : 280),
                    node,
                    size
                })
            )
        ).start(() => {
            setVisible(!visible);
        });
    };

    run(list);

    return (
        <Animated.View
            style={[{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            }, containerStyle
            ]}
        >
            {list.map((size, index) =>
                <Dot key={index} dynamicSize={size} />
            )}
        </Animated.View>
    );
};