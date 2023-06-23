import React, {MutableRefObject, PropsWithChildren} from "react";

export interface ISection extends PropsWithChildren {
    secRef?: React.MutableRefObject<HTMLDivElement | null>;
    background?: string;
}

export interface IContext {
    contactRef: MutableRefObject<HTMLDivElement | null>;
    pricesRef: MutableRefObject<HTMLDivElement | null>;
    handleScrollClick: (ref: React.MutableRefObject<HTMLDivElement | null>) => void;
}

export interface IButton extends ISection {
    variant: string;
    link?: string;
    size: string;
}

export interface IContextProps extends PropsWithChildren {}