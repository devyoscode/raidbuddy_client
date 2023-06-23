import React from 'react';
import {ISection} from "@/types/types";

const Section = ({secRef, children, background}: ISection) => {
    return (
        <div ref={secRef} className={`w-screen space-y-6 flex items-start justify-center ${background} relative`}>
            <div className="w-full max-w-[1280px] flex flex-col flex-1">
                {children}
            </div>
        </div>
    );
};

export default Section;