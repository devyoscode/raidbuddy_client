"use client";

import React from 'react';
import Button from "@/components/ui/button";
import {useStateContext} from "@/context/stateContext";

const NavHeader = () => {
    const {pricesRef, contactRef} = useStateContext()
    return (
        <header className="w-full h-20 containter border-2 flex items-center justify-between">
            <div className="w-1/3 font-semibold text-2xl flex items-center justify-start">raidbuddy</div>
            <nav className="w-1/3 flex items-center justify-center gap-5">
                <Button variant="navigation" size="md">Features</Button>
                <Button secRef={pricesRef} variant="navigation" size="md">Prices</Button>
                <Button secRef={contactRef} variant="navigation" size="md">Contact</Button>
            </nav>
            <div className="w-1/3 flex items-center justify-end">
                <Button variant="" size="md">Dashboard</Button>
            </div>
        </header>
    );
};

export default NavHeader