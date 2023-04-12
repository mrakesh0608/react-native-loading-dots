import React from "react";

import { LoadingDotContextProvider } from "./components/context";
import { Container } from "./components/Container";
import { LoadingDotsProps } from "./types";

export function LoadingDots({
    animation = "pulse",
    dots = 3,
    color = "black",
    size = 10,
    spacing = 2,
    delay = 280,
    containerStyle = {}
}: LoadingDotsProps) {
    return (
        <LoadingDotContextProvider
            values={{ animation, dots, color, size, spacing, delay, containerStyle }}
        >
            <Container />
        </LoadingDotContextProvider>
    );
};