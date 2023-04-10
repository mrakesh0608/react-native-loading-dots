import React, { createContext, ReactNode, useContext } from "react";

import { LoadingDotsProps } from "../types";

const LoadingDotContext = createContext<LoadingDotsProps>({});

export const useLoadingContext = () => {
    const context = useContext(LoadingDotContext);
    return context;
};

export const LoadingDotContextProvider = ({
    children,
    values,
}: {
    children: ReactNode;
    values: LoadingDotsProps;
}) => {
    return (
        <LoadingDotContext.Provider value={{ ...values }}>
            {children}
        </LoadingDotContext.Provider>
    );
};