"use client";

import React from 'react';
import {useRouter} from "next/navigation";
import {useStateContext} from "@/context/stateContext";
import {IButton} from "@/types/types";

const Button = ({children, variant, link, size, secRef}: IButton) => {
    const router = useRouter();
    const {handleScrollClick} = useStateContext()

    let buttonSize: string;
    let buttonVariant: string;


    switch (size) {
        case "sm": {
            buttonSize = "px-2 text-xs h-4"
            break;
        }
        case "md": {
            buttonSize = "py-2 px-4 text-sm"
            break;
        }
        case "lg": {
            buttonSize = "w-28 py-2 rounded-lg text-sm"
            break;
        }
        default: {
            buttonSize = ""
            break;
        }
    }

    switch (variant) {
        case "outline": {
            buttonVariant = " justify-center text-slate-800 border-2 border-slate-800 transition hover:text-slate-900 hover:bg-slate-200/40"
            break;
        }
        case "link": {
            buttonVariant = "hover:text-teal-500"
            break;
        }
        case "icon": {
            buttonVariant = "justify-center hover:scale-105 transition text-slate-50 hover:text-slate-100"
            break;
        }
        case "secondary": {
            buttonVariant = "a"
            break;
        }
        case "navigation": {
            buttonVariant = "text-slate-900 justify-center hover:text-slate-800"
            break;
        }
        default: {
            buttonVariant = `text-slate-50 bg-slate-900`
            break;
        }
    }

    const handleClick = () => {
        if (secRef) {
            handleScrollClick(secRef)
        }

        if (link) {
            router.push(link)
        }
    }


    return (
        <button onClick={handleClick} className={`flex ${buttonSize} items-center ${buttonVariant} `}>
            {children}
        </button>
    );
};

export default Button;