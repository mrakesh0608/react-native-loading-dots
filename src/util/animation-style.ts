import { Animated } from "react-native";

export const animationStyle = ({
    animation, delay,
    node, size
}: {
    animation: string | undefined,
    node: Animated.Value,
    delay: number,
    size: number | undefined
}) => {

    const pulse = Animated.sequence([
        Animated.timing(node, {
            toValue: Number(size),
            delay,
            duration: 400,
            useNativeDriver: false,
        }),
        Animated.timing(node, {
            toValue: 0,
            duration: 400,
            useNativeDriver: false,
        }),
    ]);

    const elastic = Animated.sequence([
        Animated.timing(node, {
            toValue: 1.5,
            delay,
            duration: 400,
            useNativeDriver: false,
        }),
        Animated.timing(node, {
            toValue: 1,
            duration: 400,
            useNativeDriver: false,
        }),
    ]);

    const flashing = Animated.sequence([
        Animated.timing(node, {
            toValue: 1,
            delay,
            duration: 400,
            useNativeDriver: false,
        }),
        Animated.timing(node, {
            toValue: 0,
            duration: 400,
            useNativeDriver: false,
        }),
        Animated.timing(node, {
            toValue: 1,
            duration: 400,
            useNativeDriver: false,
        }),
    ]);

    const typing = Animated.sequence([
        Animated.timing(node, {
            toValue: -Number(size),
            delay,
            duration: 400,
            useNativeDriver: false,
        }),
        Animated.timing(node, {
            toValue: 0,
            duration: 400,
            useNativeDriver: false,
        }),
    ]);

    const ping = Animated.sequence([
        Animated.timing(node, {
            toValue: 0,
            delay,
            duration: 1200,
            useNativeDriver: false,
        }),
    ]);

    switch (animation) {
        case "elastic":
            return elastic;
        case "flashing":
            return flashing;
        case "typing":
            return typing;
        case "ping":
            return ping;
        default:
            return pulse;
    }
};

export const styles = (
    animation: string | undefined,
    color: string | undefined,
    size: number | undefined,
    dynamicSize: Animated.Value | undefined
): any => {

    const defaultStyles = {
        position: "absolute",
        backgroundColor: color,
        borderRadius: 100,
    }

    const defaultStylesWithSize = {
        ...defaultStyles,
        height: size,
        width: size,
    }

    const pulse = {
        ...defaultStyles,
        height: dynamicSize,
        width: dynamicSize,
    };

    const elastic = {
        ...defaultStylesWithSize,
        transform: [{ scaleY: dynamicSize }],
    };
    const flashing = {
        ...defaultStylesWithSize,
        opacity: dynamicSize,
    };
    const typing = {
        ...defaultStylesWithSize,
        top: dynamicSize,
    };
    const ping = {
        ...defaultStylesWithSize,
        opacity: dynamicSize,
        transform: [
            {
                scale: dynamicSize?.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0],
                }),
            },
        ],
    };

    switch (animation) {
        case "elastic":
            return elastic;
        case "flashing":
            return flashing;
        case "typing":
            return typing;
        case "ping":
            return ping;
        default:
            return pulse;
    }
};