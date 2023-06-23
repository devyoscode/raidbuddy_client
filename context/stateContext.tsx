"use client";

import React, {createContext, useContext, useRef} from 'react';
import {IContext, IContextProps} from "@/types/types";

const Context = createContext({} as IContext)

export const StateContext = ({children}: IContextProps) => {
    const pricesRef = useRef<HTMLDivElement | null>(null)
    const contactRef = useRef<HTMLDivElement | null>(null)

    const handleScrollClick = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
        if (!ref) return;
        ref.current?.scrollIntoView({behavior: "smooth"})
    }

    return (
        <Context.Provider value={{ pricesRef, contactRef, handleScrollClick}}>
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context)